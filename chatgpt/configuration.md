# Custom GPT configuration

Configured in ChatGPT GPT Builder on 2026-10-12 (draft, owner-only until approved for sharing).

| Field | Value |
|---|---|
| Name | BridgeLogics Product Discovery Coach |
| Description | Turn product ideas into clearer decisions. Develop a new idea into something testable, or get a critical review of what you have already built. |
| Instructions | Contents of `instructions.md` (about 6,600 characters, under the 8,000 limit) |
| Conversation starters | Help me develop a product idea. / Review a product I've already developed. / Help me identify the biggest risks in my idea. / Help me figure out what to validate next. |
| Knowledge files | None in v0.1.0. The instructions carry the full method and both artifact structures, so the GPT does not depend on file retrieval. |
| Recommended model | None (users choose) |
| Web Search | On. Lets the coach check alternatives when the user asks, instead of guessing. |
| Image Generation | Off. Not needed. |
| Code Interpreter | Off. Not needed. |
| Actions | None. No external integrations. |
| Avatar | Not set. Use a temporary geometric graphic in brand colors (see `assets/README.md`) until the official mark is approved. Do not use a B icon. |

## Sharing

As of 2026-10-12, the GPT Builder share dialog offers only **Only me** and states that sharing GPTs with the public is no longer available. OpenAI is retiring custom GPTs on 11 December 2026 in favour of plugins. The GPT is saved as owner-only for reference.

For testers, use the portable route instead: paste `instructions.md` into a ChatGPT Project's instructions, or as the first message of a chat. See `beta/tester-guide.md`.

If ChatGPT plugins later support private sharing on this account, migrate the GPT and add the link here.

## Updating

Edit `instructions.md` here first, then paste it into the Instructions field so the repository stays the source of truth.
