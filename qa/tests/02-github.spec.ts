/**
 * Journey 2: a visitor on GitHub understands the coach and gets what they need.
 *
 * Real: the public repository. No login, no cost.
 * Side effect: saves the skill ZIP and the ChatGPT instructions into
 * qa/downloads/, which journeys 3 and 4 use, exactly like a real user would.
 */
import { test, expect } from '@playwright/test'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { caption, spotlight } from './helpers/narrate'
import { URLS } from './helpers/test-user'

const DOWNLOADS = path.join(__dirname, '..', 'downloads')

test('GitHub: visitor reads the README, finds the tester guide, downloads the skill', async ({ page }) => {
  fs.mkdirSync(DOWNLOADS, { recursive: true })

  await test.step('Open the repository', async () => {
    await page.goto(URLS.repo)
    await expect(page.getByRole('heading', { name: 'BridgeLogics Product Discovery Skill' })).toBeVisible()
    await caption(page, '1. The visitor lands on the repository', 'The README is the front door. Is the promise clear above the fold?')
  })

  await test.step('Read the "Try it" table', async () => {
    const tryIt = page.locator('article').getByRole('heading', { name: 'Try it' })
    await tryIt.scrollIntoViewIfNeeded()
    await spotlight(page, 'article table')
    await caption(page, '2. They find "Try it"', 'Three ways in: Claude Skill, ChatGPT, web coach. Can they pick one in under a minute?')
  })

  await test.step('Open the tester guide', async () => {
    await page.locator('article').getByRole('link', { name: 'tester guide' }).first().click()
    await expect(page).toHaveURL(/beta\/tester-guide\.md/)
    await caption(page, '3. They open the tester guide', 'Step-by-step instructions for every entry point.')
    await page.mouse.wheel(0, 900)
    await page.waitForTimeout(1500)
    await page.goBack()
  })

  await test.step('Download the Claude Skill ZIP', async () => {
    await page.goto(`${URLS.repo}/blob/main/dist/bridgelogics-product-discovery-skill.zip`)
    await caption(page, '4. They open the skill ZIP', 'GitHub shows a file page with a download button.')
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: /download raw file/i }).or(page.getByRole('link', { name: /download|view raw/i })).first().click(),
    ])
    const zipPath = path.join(DOWNLOADS, 'bridgelogics-product-discovery-skill.zip')
    await download.saveAs(zipPath)
    const listing = execSync(`unzip -l "${zipPath}"`).toString()
    expect(listing).toContain('SKILL.md')
    await caption(page, '5. Download complete', 'The ZIP contains SKILL.md, references, and templates. Keep it zipped for upload.')
  })

  await test.step('Grab the ChatGPT instructions', async () => {
    await page.goto(`${URLS.repo}/blob/main/chatgpt/instructions.md`)
    await caption(page, '6. They open chatgpt/instructions.md', 'This is what they paste into ChatGPT.')
    const raw = await page.request.get(
      'https://raw.githubusercontent.com/BridgeLogicsProjects/product-discovery-skill/main/chatgpt/instructions.md',
    )
    expect(raw.ok()).toBeTruthy()
    fs.writeFileSync(path.join(DOWNLOADS, 'instructions.md'), await raw.text())
    await caption(page, '7. Instructions copied', 'Journey 2 complete. Journeys 3 and 4 use these two files.')
  })
})
