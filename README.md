# BridgeLogics Product Discovery Skill

**Connect ideas. Spark possibilities.**

Turn product ideas into clearer decisions, stronger opportunities, and practical next steps.

Part of the **BridgeLogics AI Skills** collection. Version 0.1.0. Methodology by Keeya Wang-Jones.

---

## What it does

An AI product discovery coach that helps people develop or evaluate product ideas through structured thinking, honest challenge, and a usable written result. It runs on three surfaces from one shared methodology:

| Surface | Best for | Folder |
|---|---|---|
| ChatGPT Custom GPT | Conversational coaching, step by step | `chatgpt/` |
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

**Custom GPT:** open the shared link and pick a conversation starter.

**Claude Skill:** zip the `claude/` folder (it contains `SKILL.md`, `references/`, and `templates/`) and upload it in Claude under Settings, Capabilities, Skills. Then ask Claude to help you develop or review a product idea.

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
beta/          Feedback form and invite draft
assets/        Brand notes and temporary avatar
```

## Author

Keeya Wang-Jones, BridgeLogics. MIT License. See `CHANGELOG.md` for version history.
