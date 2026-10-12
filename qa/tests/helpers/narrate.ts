import { Page, test } from '@playwright/test'

/**
 * On-screen captions so a human watching the run (or the video) can see
 * what the test user is doing and why. Styled in BridgeLogics colors.
 */
const READ_MS = Number(process.env.READ_MS ?? 2500)

export async function caption(page: Page, step: string, detail = ''): Promise<void> {
  await page.evaluate(
    ({ step, detail }) => {
      let el = document.getElementById('__qa_caption')
      if (!el) {
        el = document.createElement('div')
        el.id = '__qa_caption'
        el.setAttribute(
          'style',
          [
            'position:fixed', 'left:16px', 'right:16px', 'bottom:16px', 'z-index:2147483647',
            'background:#32108B', 'color:#F7F5EF', 'border-left:6px solid #D7FF45',
            'border-radius:10px', 'padding:14px 18px', 'font:15px/1.45 system-ui,sans-serif',
            'box-shadow:0 8px 24px rgba(0,0,0,.35)', 'pointer-events:none', 'max-width:900px',
          ].join(';'),
        )
        document.body.appendChild(el)
      }
      el.innerHTML = ''
      const s = document.createElement('div')
      s.textContent = step
      s.setAttribute('style', 'font-weight:700;color:#D7FF45;margin-bottom:2px')
      el.appendChild(s)
      if (detail) {
        const d = document.createElement('div')
        d.textContent = detail
        el.appendChild(d)
      }
    },
    { step, detail },
  )
  await page.waitForTimeout(READ_MS)
}

/** Draw a lime outline around what the user is looking at. */
export async function spotlight(page: Page, selector: string): Promise<void> {
  // A spotlight is decoration: if the element isn't there, skip it after 3s
  // instead of waiting forever.
  await page
    .locator(selector)
    .first()
    .evaluate((node: Element) => {
      ;(node as HTMLElement).style.outline = '4px solid #D7FF45'
      ;(node as HTMLElement).style.outlineOffset = '4px'
      node.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, undefined, { timeout: 3000 })
    .catch(() => undefined)
  await page.waitForTimeout(1200)
}

/**
 * A step the test tries to do automatically. If the page has changed and
 * the automation cannot find its way, the run pauses with instructions so
 * you can do that step by hand in the open window, then press Resume in
 * the Playwright Inspector. The test records that the step was manual.
 */
export async function guidedStep(
  page: Page,
  title: string,
  manualInstructions: string,
  action: () => Promise<void>,
): Promise<'auto' | 'manual'> {
  return test.step(title, async () => {
    try {
      await action()
      return 'auto' as const
    } catch (err) {
      await caption(page, `Your turn: ${title}`, `${manualInstructions} Then press Resume in the Playwright Inspector.`)
      test.info().annotations.push({ type: 'manual-step', description: `${title}: ${String(err).slice(0, 200)}` })
      if (process.env.HEADLESS === '1') throw err
      await page.pause()
      return 'manual' as const
    }
  })
}

/**
 * Wait until an AI reply has finished streaming: the visible text of the
 * page stops changing for `quietMs`. Works for ChatGPT and Claude without
 * depending on their internal markup.
 */
export async function waitForReplyToSettle(page: Page, quietMs = 6000, maxMs = 240_000): Promise<void> {
  const start = Date.now()
  let last = -1
  let stableSince = Date.now()
  while (Date.now() - start < maxMs) {
    const len = await page.evaluate(() => document.body.innerText.length)
    if (len !== last) {
      last = len
      stableSince = Date.now()
    } else if (Date.now() - stableSince > quietMs) {
      return
    }
    await page.waitForTimeout(1000)
  }
  throw new Error('Reply did not finish within the time limit')
}
