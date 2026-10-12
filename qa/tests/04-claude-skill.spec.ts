/**
 * Journey 4: a Claude user installs the skill and uses it.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ COSTS REAL USAGE: sends about 3 messages from the signed-in Claude   │
 * │ account, and UPLOADS the skill into that account. If the skill is    │
 * │ already installed, Claude may refuse a duplicate: delete it first in │
 * │ Customize > Skills, or let the run pause and skip the upload by hand.│
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Real: live claude.ai, using a saved sign-in (qa/auth/claude.json).
 * Mirrors section 4 of beta/tester-guide.md step by step, so a pass here
 * means the written instructions actually work.
 */
import { test, expect } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'
import { caption, guidedStep, waitForReplyToSettle } from './helpers/narrate'
import { TEST_USER, URLS } from './helpers/test-user'

const AUTH = path.join(__dirname, '..', 'auth', 'claude.json')
const ZIP = path.join(__dirname, '..', 'downloads', 'bridgelogics-product-discovery-skill.zip')

// Fail loudly (not a silent skip) so it is obvious what to do next.
test.beforeAll(() => {
  if (!fs.existsSync(AUTH)) throw new Error('No Claude sign-in saved. Run: npm run auth:claude')
  if (!fs.existsSync(ZIP)) throw new Error('Run the GitHub journey first: npm run test:github')
})
test.use({ storageState: fs.existsSync(AUTH) ? AUTH : undefined })

test('Claude Skill: test user installs the ZIP and gets a product review', async ({ page }) => {
  await test.step('Check code execution is on', async () => {
    await page.goto(URLS.claudeCapabilities)
    await caption(
      page,
      '1. Settings > Capabilities',
      'Skills need "Code execution and file creation" switched on. The test only looks; it does not change your settings.',
    )
  })

  await test.step('Open Customize > Skills', async () => {
    await page.goto(URLS.claudeSkills)
    await caption(page, '2. Customize > Skills', 'Skills now live under Customize. This is where the test user uploads the ZIP from GitHub.')
  })

  await guidedStep(page, '3. Upload the skill ZIP', 'Click + Add, then Upload skill, choose qa/downloads/bridgelogics-product-discovery-skill.zip, and click Upload.', async () => {
    await page.getByRole('button', { name: /add/i }).first().click()
    const chooser = page.waitForEvent('filechooser', { timeout: 15_000 }).catch(() => null)
    await page.getByText(/^upload skill$/i).first().click()
    const fc = await chooser
    if (fc) await fc.setFiles(ZIP)
    else await page.locator('input[type="file"]').first().setInputFiles(ZIP)
    await expect(page.getByText('bridgelogics-product-discovery').first()).toBeVisible()
    await caption(page, '3. The preview shows the skill name', 'Check the name and description, then Upload. A security scan runs.')
    await page.getByRole('button', { name: /^upload$/i }).click()
  })

  await test.step('Confirm it is installed and on', async () => {
    await expect(page.getByText('bridgelogics-product-discovery').first()).toBeVisible({ timeout: 60_000 })
    await caption(page, '4. Skill installed', 'Check the toggle next to bridgelogics-product-discovery is on.')
  })

  const box = page.locator('[contenteditable="true"]').first()
  async function send(text: string, label: string, detail: string) {
    await caption(page, label, detail)
    await guidedStep(page, label, `Type this into Claude and send it: "${text.slice(0, 80)}..."`, async () => {
      await box.click()
      await box.fill(text)
      await page.keyboard.press('Enter')
    })
    await waitForReplyToSettle(page)
  }

  await test.step('Start a new chat', async () => {
    await page.goto(URLS.claudeNewChat)
    await expect(box).toBeVisible({ timeout: 30_000 })
  })

  await send(
    "Use the BridgeLogics product discovery skill. I want to review a product I've already built.",
    '5. They ask Claude to use the skill',
    'Check: Claude uses the skill and asks what they built, instead of answering generically.',
  )
  await send(TEST_USER.product, '6. They describe their product', 'Check: focused questions, trust and legal risks named, no invented facts.')
  await send(TEST_USER.finish, '7. They ask for the final review', 'Check: Product Review and Opportunity Assessment with evidence labels.')

  await test.step('Check the final artifact', async () => {
    await expect(page.locator('body')).toContainText(/Opportunity Assessment|Evidence reviewed|Top three priorities/i)
    await caption(page, '8. Journey complete', 'The skill installed from GitHub and produced the review.')
  })
})
