/**
 * Journey 3: a ChatGPT user runs the coach in their own account.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ COSTS REAL USAGE: sends about 4 messages from the signed-in ChatGPT  │
 * │ account on every run. No extra charge on a paid plan, but it counts  │
 * │ toward message limits. Run it deliberately, by name.                 │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Real: live ChatGPT, using a saved sign-in (qa/auth/chatgpt.json).
 * Uses "Option B" from the tester guide (instructions pasted as the first
 * message) because it is the same for every plan. Custom GPT links can no
 * longer be shared, so this is the route testers actually take.
 *
 * ChatGPT changes its page often and may challenge automated browsers.
 * If a step cannot be automated, the run pauses so you can do it by hand.
 */
import { test, expect } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'
import { caption, guidedStep, waitForReplyToSettle } from './helpers/narrate'
import { TEST_USER, URLS } from './helpers/test-user'

const AUTH = path.join(__dirname, '..', 'auth', 'chatgpt.json')
const INSTRUCTIONS = path.join(__dirname, '..', 'downloads', 'instructions.md')

// Fail loudly (not a silent skip) so it is obvious what to do next.
test.beforeAll(() => {
  if (!fs.existsSync(AUTH)) throw new Error('No ChatGPT sign-in saved. Run: npm run auth:chatgpt')
  if (!fs.existsSync(INSTRUCTIONS)) throw new Error('Run the GitHub journey first: npm run test:github')
})
test.use({ storageState: fs.existsSync(AUTH) ? AUTH : undefined })

test('ChatGPT: test user pastes the coach and gets a product review', async ({ page }) => {
  const box = page.locator('#prompt-textarea, [contenteditable="true"]').first()

  async function send(text: string, label: string, detail: string) {
    await caption(page, label, detail)
    await guidedStep(page, label, `Paste or type this into the ChatGPT box and send it: "${text.slice(0, 80)}..."`, async () => {
      await box.click()
      await box.fill(text)
      await page.keyboard.press('Enter')
    })
    await waitForReplyToSettle(page)
  }

  await test.step('Open ChatGPT', async () => {
    await page.goto(URLS.chatgpt)
    await expect(box).toBeVisible({ timeout: 30_000 })
    await caption(page, '1. The test user opens a new ChatGPT chat', `Signed in. Test user: ${TEST_USER.name}.`)
  })

  await send(
    fs.readFileSync(INSTRUCTIONS, 'utf8'),
    '2. They paste the coach instructions',
    'Option B from the tester guide: the instructions go in as the first message.',
  )
  await caption(page, '3. The coach introduces itself', 'Check: does it offer the two paths, Develop and Review?')
  await expect(page.locator('body')).toContainText(/review/i)

  await send(TEST_USER.path, '4. They choose "Review my existing idea"', 'Check: does it ask what they built and what feedback they want?')
  await send(TEST_USER.product, '5. They describe their product', 'Check: one or two focused questions, not a questionnaire.')
  await send(TEST_USER.finish, '6. They ask for the final review', 'Check: a Product Review and Opportunity Assessment with evidence labels.')

  await test.step('Check the final artifact', async () => {
    await expect(page.locator('body')).toContainText(/Opportunity Assessment|Evidence reviewed|Top three priorities/i)
    await page.mouse.wheel(0, -2000)
    await caption(page, '7. Journey complete', 'Scroll the video back to read the full review the user received.')
  })
})
