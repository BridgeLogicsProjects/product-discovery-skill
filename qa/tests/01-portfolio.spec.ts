/**
 * Journey 1: a visitor finds the coach on the portfolio site.
 *
 * Real: the live site at PORTFOLIO_URL (defaults to staging). No login, no cost.
 */
import { test, expect } from '@playwright/test'
import { caption, spotlight } from './helpers/narrate'
import { URLS } from './helpers/test-user'

test('Portfolio: visitor finds the Product Discovery Coach and reaches GitHub', async ({ page, context }) => {
  await test.step('Land on the portfolio', async () => {
    await page.goto(URLS.portfolio)
    await caption(page, '1. A visitor lands on your portfolio', `${URLS.portfolio}`)
  })

  await test.step('Scroll to the AI section', async () => {
    const heading = page.getByRole('heading', { name: 'AI Product Manager + Leader' })
    await heading.scrollIntoViewIfNeeded()
    await expect(heading).toBeVisible()
    await spotlight(page, '.bl-section__header:has-text("AI Product Manager + Leader")')
    await caption(
      page,
      '2. They scroll to "AI Product Manager + Leader"',
      'First impression check: does the section title and the smaller Gen AI · Conversational AI · Agentic AI line read clearly?',
    )
  })

  const card = page.locator('.bl-card', { hasText: 'Product Discovery Coach' })

  await test.step('Find the Product Discovery Coach card', async () => {
    await expect(card).toBeVisible()
    await spotlight(page, '.bl-card:has-text("Product Discovery Coach")')
    await card.hover()
    await caption(
      page,
      '3. They spot the Product Discovery Coach card',
      'Would a stranger understand what it does from the title, tagline, and three highlights alone?',
    )
  })

  await test.step('Click "View on GitHub"', async () => {
    await caption(page, '4. They click "View on GitHub"', 'The card should take them to the public repository.')
    const [target] = await Promise.all([
      // The card opens GitHub either in a new tab or the same tab; accept both.
      Promise.race([
        context.waitForEvent('page').catch(() => new Promise<never>(() => undefined)),
        page
          .waitForURL(/github\.com/)
          .then(() => page)
          .catch(() => new Promise<never>(() => undefined)),
      ]),
      card.click(),
    ])
    await target.waitForLoadState()
    await expect(target).toHaveURL(/github\.com\/BridgeLogicsProjects\/product-discovery-skill/)
    await caption(target, '5. They arrive on GitHub', 'Journey 1 complete. Journey 2 picks up from here.')
  })
})
