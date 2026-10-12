/**
 * The fictional test user and their product. Fictional on purpose: no real
 * tester's idea is stored in this repository.
 */
export const TEST_USER = {
  name: 'Sam (fictional tester)',
  path: "Review a product I've already developed.",
  product:
    "I built a prototype web app that lets two people create and sign a simple agreement for a one-off deal, like selling a used car or lending money to a friend. " +
    'About 40 people have tried it from a Reddit post; 9 created an agreement and 3 got the other person to sign. ' +
    'I want to know what I am missing and what to test next. Quick review please.',
  finish: 'Please give me the final Product Review and Opportunity Assessment now.',
}

export const URLS = {
  portfolio: process.env.PORTFOLIO_URL ?? 'https://bridgelogics-staging.web.app',
  repo: 'https://github.com/BridgeLogicsProjects/product-discovery-skill',
  chatgpt: 'https://chatgpt.com/',
  claudeSkills: 'https://claude.ai/customize/skills',
  claudeCapabilities: 'https://claude.ai/settings/capabilities',
  claudeNewChat: 'https://claude.ai/new',
}
