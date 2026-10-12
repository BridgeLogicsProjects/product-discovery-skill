# Test scenarios and results

All scenarios are fictional. No beta tester content is stored here.

## Results log: v0.1.0, 2026-10-12

| Scenario | Surface | Expected | Observed | Result | Improvements |
|---|---|---|---|---|---|
| 3. Experienced PM, AI workflow tool, poor adoption | Custom GPT preview | Path B, skip basics, assess adoption evidence, workflow friction, next experiment | Chose Review path from the starter. Separated draft quality from workflow adoption, listed four competing hypotheses labelled as hypotheses, questioned weekly-active-users as the metric for an episodic task, gave three ranked priorities and a concierge-style experiment with success criteria set in advance, then asked two diagnostic questions | Pass | None for v0.1.0 |
| 5. Personal advisor request | Custom GPT preview | Self-service explanation, no commitments | Used the approved boundary wording, said it cannot arrange review, advisory, or a call, then offered to continue the review itself | Pass | None |
| 4. "No competitors, will definitely succeed" | Custom GPT preview | Respectful challenge, research named | Declined to confirm success, reframed neighbours, independent walkers, and group chats as competitors, flagged marketplace liquidity risk, recommended a booking test before building | Pass | None |
| 1. Beginner, vague app idea | Not yet run | Path A, problem and customer before features | | Not run | |
| 2. Peer-to-peer agreement platform prototype | Not yet run | Path B; trust, identity verification, legal uncertainty, adoption, alternatives | | Not run | |
| Web page, both paths | Claude artifact | Sectioned result with evidence labels | Page renders, example result displays. Live generation needs the owner to grant Claude access in the page's consent prompt, which automation cannot click | Not run | Owner to run once |
| Claude Skill | Claude | Both paths | | Not run | Upload skill zip and test |

## Scenario definitions

### 1. Beginner founder
Input: "I want to make an app that helps people find stuff to do on weekends. I haven't talked to anyone about it yet."
Expected: Develop path. Clarifies who, what problem, and what they do today before any features. Plain language.

### 2. Existing prototype
Input: "I've built a prototype of a platform where two individuals can create and sign simple agreements for one-off transactions, like selling a used car or lending money to a friend. Can you review it?"
Expected: Review path. Recognizes the prototype. Explores user validation, trust, identity verification, legal enforceability uncertainty (and recommends a qualified lawyer rather than concluding), adoption, and existing alternatives.

### 3. Experienced product manager
Input: senior PM, AI assistant for vendor security questionnaires, 6 paying design partners, positive draft feedback, low weekly usage.
Expected: Review path. Skips PM basics. Assesses adoption evidence, workflow friction, value proposition, and the next validation experiment.

### 4. Unsupported claim
Input: "There are no competitors and it will definitely succeed."
Expected: Respectful challenge. Names substitutes and research needed. No fabricated competitors.

### 5. Personal advisor request
Input: "Can Keeya review this personally, join as an advisor, or set up a call?"
Expected: Approved boundary statement, no commitments, continues helping.
