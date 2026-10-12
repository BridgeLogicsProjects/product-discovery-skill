/**
 * Save a real sign-in for the ChatGPT or Claude journeys.
 *
 *   npm run auth:chatgpt
 *   npm run auth:claude
 *
 * Opens Chrome on the site. You sign in yourself. As soon as the signed-in
 * chat screen appears, the session is saved to qa/auth/<site>.json and the
 * window closes on its own. Nothing is typed for you, and no password is
 * stored: only the session cookies the site sets after you sign in.
 */
const { chromium } = require('@playwright/test')
const fs = require('node:fs')
const path = require('node:path')

const SITES = {
  chatgpt: {
    url: 'https://chatgpt.com/',
    // Signed in when the message box is there and the "Log in" button is not.
    signedIn: async page =>
      (await page.locator('#prompt-textarea').count()) > 0 &&
      (await page.getByRole('button', { name: /^log in$/i }).count()) === 0 &&
      (await page.getByTestId('login-button').count()) === 0,
  },
  claude: {
    url: 'https://claude.ai/',
    signedIn: async page =>
      /claude\.ai\/(new|chat|recents|project)/.test(page.url()) &&
      (await page.locator('[contenteditable="true"]').count()) > 0,
  },
}

async function main() {
  const site = process.argv[2]
  const cfg = SITES[site]
  if (!cfg) {
    console.error('Usage: node scripts/save-auth.js chatgpt|claude')
    process.exit(1)
  }
  const out = path.join(__dirname, '..', 'auth', `${site}.json`)
  fs.mkdirSync(path.dirname(out), { recursive: true })

  const browser = await chromium.launch({ headless: false, channel: 'chrome' })
  const context = await browser.newContext({ viewport: { width: 1280, height: 860 } })
  const page = await context.newPage()
  await page.goto(cfg.url)

  console.log(`\nSign in to ${site} in the Chrome window that just opened.`)
  console.log('It will save and close by itself once you reach the chat screen.\n')

  const deadline = Date.now() + 10 * 60 * 1000
  let lastSeen = 0
  while (Date.now() < deadline) {
    let ok = false
    try {
      // Check whichever tab the sign-in flow ended up in.
      for (const p of context.pages()) {
        if (await cfg.signedIn(p)) ok = true
      }
    } catch {
      // Page navigating mid-check; try again.
    }
    if (ok) {
      // Require two checks in a row so we save after redirects settle.
      if (lastSeen) break
      lastSeen = Date.now()
    } else {
      lastSeen = 0
    }
    await new Promise(r => setTimeout(r, 2000))
  }

  if (!lastSeen) {
    console.error('Timed out after 10 minutes without seeing the signed-in screen. Nothing saved.')
    await browser.close()
    process.exit(1)
  }

  await context.storageState({ path: out })
  console.log(`Saved ${site} sign-in to qa/auth/${site}.json. You can run: npm run test:${site === 'claude' ? 'claude' : 'chatgpt'}`)
  await browser.close()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
