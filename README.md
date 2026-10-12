# BridgeLogics Product Discovery Skill

**Connect ideas. Spark possibilities.**

Turn product ideas into clearer decisions, stronger opportunities, and practical next steps.

Part of the **BridgeLogics AI Skills** collection. Version 0.1.0. Methodology by Keeya Wang-Jones.

---

## Start here

**New to this? Use the [step-by-step setup guide](https://bridgelogicsprojects.github.io/product-discovery-skill/).** Pick Claude, ChatGPT, or no-install, and it walks you through each click.

### Claude (about 3 minutes, once)

1. **Download** [`bridgelogics-product-discovery-skill.zip`](https://github.com/BridgeLogicsProjects/product-discovery-skill/raw/main/dist/bridgelogics-product-discovery-skill.zip). On a Mac, Safari may unzip it into a folder: right-click the `bridgelogics-product-discovery` folder and choose **Compress "bridgelogics-product-discovery"**. Keep the name exactly as it is.
2. **Turn on code execution:** in Claude, **Settings > Capabilities > Code execution and file creation**.
3. **Upload:** **Customize > Skills**, click **+ Add**, then **Upload skill**, choose the ZIP, and click **Upload**.
4. **Switch it on:** make sure the toggle next to **bridgelogics-product-discovery** is on.
5. **Use it:** in a new chat, type **/** and pick the skill, or send *"Use the BridgeLogics product discovery skill. I want to review a product I've already built."*

You should see Claude offer two paths, ask one or two questions at a time, and finish with a written brief or review.

### ChatGPT (about 2 minutes)

1. Copy the text of [`chatgpt/instructions.md`](chatgpt/instructions.md).
2. Create a ChatGPT **Project** called "Product Discovery Coach" and paste the text into its **Instructions**.
3. Start a chat in the project and send *"Review a product I've already developed."*

---

## Try it

| Entry point | How to start |
|---|---|
| **Claude Skill** | Download [`dist/bridgelogics-product-discovery-skill.zip`](dist/bridgelogics-product-discovery-skill.zip), then follow the install steps below |
| **ChatGPT** | Paste [`chatgpt/instructions.md`](chatgpt/instructions.md) into a ChatGPT Project's instructions (steps in the [tester guide](beta/tester-guide.md)) |
| **Web coach** | [Live coach in Claude](https://claude.ai/artifact/5jpfpETWC8ouutdk9NpJpd) (uses your Claude account), or the [paste version](https://bridgelogicsprojects.github.io/product-discovery-skill/coach.html) for any AI |

New to it? Start with the [tester guide](beta/tester-guide.md).

---

## What it does

An AI product discovery coach that helps people develop or evaluate product ideas through structured thinking, honest challenge, and a usable written result. It runs on three surfaces from one shared methodology:

| Surface | Best for | Folder |
|---|---|---|
| ChatGPT (instructions) | Conversational coaching, step by step | `chatgpt/` |
| Claude Skill | Conversational coaching inside Claude | `claude/` |
| Web coach page | A one-shot brief from a short form, shown in readable sections | `web/` |

It is a reusable skill, not a SaaS product. No backend, database, accounts, or payments.

## Who it is for

Founders, product managers, students, and anyone with a product idea, from a sentence on a napkin to a product with paying customers.

## Two paths

**1. Develop my idea.** For early concepts. Moves from idea to a testable opportunity: problem, customer, alternatives, value proposition, assumptions, solution options, and the smallest useful experiment.
Output: **Product Opportunity Brief.**

**2. Review my existing idea.** For concepts, prototypes, MVPs, pilots, and live products. Starts from what exists, clarifies what the user wants to learn, then assesses problem-solution fit, experience, risk, strengths, gaps, priorities, and the next test.
Output: **Product Review and Opportunity Assessment.**

Users can ask for a **quick review** or a **deep dive**, and can switch paths without losing context.

## How it adapts

The coach infers experience from what people write, not their job titles. Beginners get plain language and one concept at a time. Experienced users skip the basics and get sharper questions about evidence, differentiation, distribution, and execution risk.

Every artifact separates what is known from what is assumed. Path A labels Known facts, Assumptions, and Questions requiring validation. Path B labels Evidence reviewed, Reasonable inferences, Unverified assumptions, and Information not available.

## Using it

**Claude Skill (install once):**
1. Download `dist/bridgelogics-product-discovery-skill.zip`. Keep it zipped.
2. In Claude, turn on **Settings > Capabilities > Code execution and file creation**.
3. Go to **Customize > Skills**, click **+ Add**, then **Upload skill**, choose the ZIP, and click **Upload**.
4. Toggle the skill on, start a new chat, and ask: "Use the BridgeLogics product discovery skill to review my product."

**ChatGPT:** OpenAI no longer allows custom GPTs to be shared by link, and custom GPTs retire on 11 December 2026. Paste `chatgpt/instructions.md` into a ChatGPT Project's instructions (or as the first message of a chat) to run the same coach in your own account.

**Web page:** `web/index.html` is a single self-contained file. Inside Claude it generates results with the viewer's own Claude account. Anywhere else, it builds a ready-made prompt to paste into Claude or ChatGPT.

## Example

> **User:** We built an AI assistant that drafts security questionnaire answers. Six paying design partners like the drafts, but weekly usage is low.
>
> **Coach:** Separates draft quality from workflow adoption, lists competing explanations as hypotheses, questions whether weekly usage is the right metric for an occasional task, ranks three priorities, and proposes a small assisted-workflow test with success criteria set in advance.

## Professional boundaries

BridgeLogics Product Discovery Coach uses a structured methodology developed by Keeya Wang-Jones, an experienced product and technology leader. This is an AI-guided product discovery experience. It does not include personal consulting or individual review by the author. The coach never speaks as the author, never offers meetings, advice, investment, introductions, or services, and never asks users to send materials to the author.

## Privacy

The platform you use (ChatGPT or Claude) handles your data under its own terms. Nothing is sent to BridgeLogics. Leave out passwords, private customer data, and confidential details. The coach claims no ownership of your idea and does not give legal, IP, medical, financial, or regulatory conclusions.

## Known limitations

- It cannot validate demand. Only real customers can.
- It does not research competitors unless the platform's web search is used, and it labels anything unverified.
- It only reviews links or files it can actually open.
- Results vary between runs and models. Treat them as a structured starting point.

## Repository layout

```
methodology/   Canonical method (source of truth)
claude/        Claude Skill: SKILL.md + references + templates
chatgpt/       GPT instructions and configuration
web/           Single-file web coach
templates/     Output templates
evals/         Rubric, scenarios, and test results
beta/          Tester guide, feedback form, invite draft
dist/          Ready-to-upload Claude Skill ZIP
assets/        Brand notes and temporary avatar
```

## Author

Keeya Wang-Jones, BridgeLogics. MIT License. See `CHANGELOG.md` for version history.
