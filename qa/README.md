# Watchable e2e QA

Four journeys, run as a fictional test user, slowed down, with a purple caption bar explaining each step. Every run is also recorded as a video, so you can replay it later.

| # | Journey | Signs in? | Cost per run |
|---|---|---|---|
| 1 | Portfolio site: find the card, click through to GitHub | No | Free |
| 2 | GitHub: read the README, open the tester guide, download the skill ZIP and ChatGPT instructions | No | Free |
| 3 | ChatGPT: paste the coach, review a product, get the final assessment | Yes | About 4 ChatGPT messages |
| 4 | Claude: install the skill ZIP, review a product, get the final assessment | Yes | About 3 Claude messages, and uploads the skill |

Run these on your own Mac, never from a Claude or Cowork sandbox (same rule as `devops.md`).

## One-time setup

```bash
cd ~/03-bridgelogicsapps/product-discovery-skill/qa
npm run setup
```

For journeys 3 and 4, save a sign-in once. A real Chrome window opens: sign in yourself, wait until you see your chats, then close the window.

```bash
npm run auth:chatgpt
npm run auth:claude
```

These files (`auth/`) hold real session cookies. They are git-ignored. Never commit or share them. Re-run the command when a session expires.

## Watch it

Start with the two free journeys:

```bash
npm run test:free
```

Then the signed-in ones, one at a time:

```bash
npm run test:chatgpt
npm run test:claude
```

Journey 2 must run before 3 and 4: it downloads the files they use, just as a real user would.

Speed controls:

Slower actions:

```bash
SLOW=1500 npm run test:portfolio
```

Captions stay up longer:

```bash
READ_MS=5000 npm run test:portfolio
```

Copy commands without anything after them. On a Mac, zsh treats a trailing `# note` as extra input, not a comment.

Replay everything afterwards, with videos and screenshots per step:

```bash
npm run report
```

## When the automation gets lost

ChatGPT and Claude change their pages often, and may challenge automated browsers. Journeys 3 and 4 never fail silently on that. The caption turns into **"Your turn: …"** with what to do, and the Playwright Inspector opens. Do that step by hand in the open window, then press **Resume**. The report marks it as a manual step.

To test against production instead of staging:

```bash
PORTFOLIO_URL=https://getbridgelogics.com npm run test:portfolio
```

## What to watch for (the user's point of view)

Use this list for this release and for the next library item.

**Finding it**
- Within 5 seconds on the portfolio, can a stranger tell what the card is and why they would click it?
- Does the click land somewhere that continues the story, not a dead end or a login wall?

**Understanding it**
- Above the fold on GitHub: what it does, who it is for, and how to start.
- One obvious first action. A "Try it" table beats a wall of text.
- Instructions name the exact buttons the user will see.

**Getting it running**
- Count the steps from landing to first useful answer. Every step is a chance to quit.
- Anything that needs a setting changed (like code execution in Claude) is called out before it fails.
- Downloads work without cloning or unzipping.

**Using it**
- The first reply orients the user: who this is for, the paths, and what they will get.
- One or two questions per turn. The user never feels interrogated.
- The final output is worth keeping or sharing, and labels evidence versus assumptions.

**Trust**
- No promise of the author's personal time.
- No invented facts.
- Clear about which platform holds their data.

## Reusing this for the next library item

1. Copy `qa/` into the new repository.
2. Edit `tests/helpers/test-user.ts`: the fictional user, their input, and the URLs.
3. Update the card text in `01-portfolio.spec.ts` and the file paths in `02-github.spec.ts`.
4. Keep the captions in plain user language. They are the script of what a user should experience.
