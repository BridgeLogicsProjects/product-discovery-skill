# Changelog

## Unreleased
- Guide: Just try it is now the first, recommended route and opens by default; the Claude card is renamed Claude Skill.
- Copyright line shortened to "© 2026 BridgeLogics. All rights reserved." now that the LinkedIn credit names the author.
- Live coach: new hero illustration by Keeya Wang-Jones (magnifier over a brief, in brand purple and lime) on a transparent background, shown beside the headline on wide screens and below it on phones. Replaces the growth curve.

## 0.2.1 (2026-10-12)
- Skill: new Step 0 tells users about the approval prompt before the coach page is created, explains what it does, and falls back to a chat brief if they decline. The template is copied with file tools, not shell commands, to keep prompts few and readable.
- Just try it (live coach): Download Word and Download PDF buttons for a finished brief or review, alongside Copy as Markdown. The PDF is a branded BridgeLogics report with tagged points, an experiment card, and a footer on every page.
- Live coach: brief sections start closed and open on click; the header stays pinned while scrolling; the example note is easier to read.
- Renamed the collection to BridgeLogics AI Product Manager Skills.
- Copyright line added to the guide, coach pages, and downloaded files. Live coach header names Keeya Wang-Jones, AI Product Manager / Product Leader, with a LinkedIn link on the page and in PDF, Word, and Markdown downloads.

## 0.2.0 (2026-10-12)
- Coaching follows the product management lifecycle (Conceive, Plan, Develop, Qualify, Launch, Deliver, Retire). Path A works in Conceive and hands off to Plan; Path B places the work by maturity.
- Well-known PM lenses brought in one at a time and named plainly: persona, voice of the customer, SWOT, PEST, TAM / SAM / SOM, Kano, RICE, MVP, beta plan, go or no-go, risk register, AIDA, KPIs.
- Coach page shows a lifecycle stepper, the lenses used so far, a Quick check card for the current question, and a Remember line on the brief.

## 0.1.1 (2026-10-12)
- When the Claude Skill runs, it opens the BridgeLogics coach page as an artifact (path cards, depth), then builds the brief on that page as the user answers, and marks it Complete at the end.
- New `claude/assets/coach-template.html`: one branded template so every user gets the same experience.
- Path and depth offered as clickable choices where the app supports them.
- Start over, keep going, or bring back: earlier briefs are kept under Earlier briefs on the same coach page.
- Setup guide and README match the real Customize > Skills > + Add > Upload skill flow, with screenshots.
- Official BridgeLogics wordmark (sparks) across the guide, coach pages, and README.

## 0.1.0 (2026-10-12)
- Shared methodology with two paths: Develop my idea, Review my existing idea
- Claude Skill package with progressive disclosure references
- ChatGPT Custom GPT instructions and configuration
- Web coach page (single HTML file, no backend) with sectioned results
- Output templates, evaluation rubric, scenarios, and first test results
- Beta feedback form and invitation draft
