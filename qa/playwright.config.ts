import { defineConfig } from '@playwright/test'

/**
 * Watch-mode e2e QA for the BridgeLogics Product Discovery Coach.
 *
 * These tests are meant to be WATCHED, not just passed. They run headed,
 * slowed down, with an on-screen caption describing each step from the
 * test user's point of view, and they record a video of every run.
 *
 * Run on your own machine only (see qa/README.md). Never from a sandbox.
 *
 * SLOW=1200 npm run test:portfolio   -> even slower
 * SLOW=0 HEADLESS=1 npm run test:all -> fast, no window (still records video)
 */
const slowMo = Number(process.env.SLOW ?? 700)

export default defineConfig({
  testDir: './tests',
  timeout: 10 * 60 * 1000, // AI replies and manual steps can take minutes
  expect: { timeout: 20_000 },
  workers: 1, // one journey at a time, so you can follow it
  fullyParallel: false,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report' }]],
  use: {
    headless: process.env.HEADLESS === '1',
    viewport: { width: 1440, height: 900 },
    launchOptions: { slowMo },
    video: { mode: 'on', size: { width: 1440, height: 900 } },
    screenshot: 'on',
    trace: 'retain-on-failure',
    acceptDownloads: true,
    // No single click, type, or lookup may hang the run. AI replies have
    // their own longer wait in waitForReplyToSettle.
    actionTimeout: 20_000,
    navigationTimeout: 45_000,
  },
  outputDir: 'test-results',
})
