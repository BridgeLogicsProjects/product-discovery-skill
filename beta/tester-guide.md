# Tester guide: BridgeLogics Product Discovery Coach (v0.1.0 beta)

Thank you for testing. The coach is an AI-guided, self-service tool. Nobody reviews your answers. Please leave out anything confidential.

Use a real or realistic product idea. For the review path, a concept, prototype, or live product works best. Each test takes 10 to 20 minutes.

There are four ways in. Try the ones you were asked to test, then fill in the feedback form (`beta/feedback-form.md`, about 3 minutes).

---

## 1. Portfolio website

1. Go to **getbridgelogics.com**.
2. Scroll to the **AI Product Manager + Leader** section.
3. Find the **Product Discovery Coach** card and click **View on GitHub**.

What to check: can you find the card, and does the description make you want to try it?

## 2. GitHub repository

1. Open **github.com/BridgeLogicsProjects/product-discovery-skill**.
2. Read the top of the README.
3. Use the **Try it** links to reach one of the entry points below.

What to check: within a minute, do you understand what it does and how to start?

## 3. ChatGPT

OpenAI no longer allows new custom GPTs to be shared by link, and custom GPTs retire on 11 December 2026. You can run the identical coach in your own ChatGPT in about two minutes.

**Option A: ChatGPT Project (recommended)**
1. In ChatGPT, create a new **Project** and name it "Product Discovery Coach".
2. Open the project's **Instructions** (project settings).
3. Paste the full text of `chatgpt/instructions.md` from the repository and save.
4. Start a chat in that project and type: **Review a product I've already developed** (or **Help me develop a product idea**).

**Option B: single chat**
1. Start a new ChatGPT chat.
2. Paste the full text of `chatgpt/instructions.md` as your first message.
3. Then type: **Review a product I've already developed**.

What to check: did it start by offering the two paths, ask one or two questions at a time, and finish with a written review?

## 4. Claude Skill

You need a Claude account (Free, Pro, Max, Team, or Enterprise). On Team or Enterprise, your admin may need to allow custom skills.

**Install (one time)**
1. Download `dist/bridgelogics-product-discovery-skill.zip` from the repository. Do not unzip it.
2. In Claude, open **Settings > Capabilities** and turn on **Code execution and file creation**. Skills need this.
3. Go to **Customize > Skills** (claude.ai/customize/skills).
4. Click **+**, then **Create skill**, then **Upload a skill**.
5. Choose the ZIP file. The skill appears as **bridgelogics-product-discovery**.
6. Make sure its toggle is **on**.

**Use it**
1. Start a new chat in Claude.
2. Type: **Use the BridgeLogics product discovery skill. I want to review a product I've already built.**
3. Answer its questions. Ask for the final review when you're ready.

What to check: did the install work first time? Did Claude use the skill (it should offer the two paths and produce a "Product Review and Opportunity Assessment")?

**If the upload fails:** make sure you uploaded the ZIP itself, not an unzipped folder, and that code execution is on. Note the exact error message in your feedback.

---

## Feedback

Answer the eight questions in `beta/feedback-form.md` and send them back the way you were invited. For each entry point you tried, also note: where did you get stuck, even briefly?
