---
title: "How I Actually Work With AI on a Live Production System"
description: "Most AI-coding stories are toy projects built from scratch. Here's what it actually looks like pairing with Claude on a real, years-old system with real clients and real data."
pubDate: 2026-08-18
tags: ["AI", "Development", "Workflow"]
draft: false
---

## Most AI-Coding Stories Are Toy Examples

Ask an AI to build a todo app or a chatbot from scratch and it'll look impressive in a screen recording. That's not the situation most working developers are actually in. I spend most of my time on a case-management platform used by a public-sector client — years of accumulated modules, dashboards, and report exports, other people's code, real cases with real people's data behind them, and a project process that expects properly logged, reviewable work rather than "it works on my machine." Nothing about that project gets to be rebuilt clean. It has to be understood and extended carefully.

This is what that actually looks like with an AI assistant in the loop — not a demo, the day-to-day.

## What a Session Actually Looks Like

Work comes in through the team's issue tracker, not a prompt I make up. Over a few months of working this way, a routine took shape — not Claude's default behavior, something I had to establish and correct a few times before it stuck:

1. Read the request properly before touching anything
2. Investigate the existing code and data first — verify assumptions against the actual schema, not a guess at what it probably does
3. If something's ambiguous or the numbers don't add up, ask before building on top of a guess
4. Implement
5. Test against real data, not just "it runs without errors"
6. Log time, update the ticket, and note anything surprising for next time

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 1320 290" role="img" aria-label="Workflow diagram: a new ticket is investigated against real code and data, built once scoped and clear (with a stakeholder-clarification branch if something is ambiguous), verified against real data, confirmed and committed only with explicit go-ahead, then the tracker is updated so the next session starts with full context.">
<defs><marker id="wf-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
<line x1="200" y1="90" x2="238" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#wf-arrow)"></line>
<line x1="420" y1="90" x2="458" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#wf-arrow)"></line>
<line x1="640" y1="90" x2="678" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#wf-arrow)"></line>
<line x1="860" y1="90" x2="898" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#wf-arrow)"></line>
<line x1="1080" y1="90" x2="1118" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#wf-arrow)"></line>
<rect x="20" y="40" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="110" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">NEW TICKET</text>
<text x="110" y="110" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">from issue tracker</text>
<rect x="240" y="40" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="330" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">INVESTIGATE</text>
<text x="330" y="110" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">code + real data first</text>
<rect x="460" y="40" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="550" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">IMPLEMENT</text>
<text x="550" y="110" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">scoped to the ticket</text>
<rect x="680" y="40" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="770" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">VERIFY</text>
<text x="770" y="110" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">against real data</text>
<rect x="900" y="35" width="180" height="110" rx="12" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-primary)" stroke-width="2"></rect>
<text x="990" y="73" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">CONFIRM &amp;</text>
<text x="990" y="89" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">COMMIT</text>
<text x="990" y="108" text-anchor="middle" font-size="10.5" fill="var(--accent-primary)" font-weight="700" font-family="JetBrains Mono, monospace">explicit go-ahead</text>
<text x="990" y="124" text-anchor="middle" font-size="9.5" fill="currentColor" fill-opacity="0.55">never assumed</text>
<rect x="1120" y="40" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="1210" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">TRACKER</text>
<text x="1210" y="102" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">UPDATED</text>
<text x="1210" y="124" text-anchor="middle" font-size="10.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">logged, notes kept</text>
<line x1="330" y1="140" x2="330" y2="158" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4"></line>
<line x1="330" y1="158" x2="440" y2="158" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4"></line>
<line x1="440" y1="158" x2="440" y2="175" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4"></line>
<rect x="350" y="175" width="180" height="70" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4"></rect>
<text x="440" y="205" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" fill-opacity="0.75">ASK STAKEHOLDER</text>
<text x="440" y="222" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace">if ambiguous</text>
<line x1="440" y1="245" x2="440" y2="263" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4"></line>
<line x1="440" y1="263" x2="550" y2="263" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4"></line>
<line x1="550" y1="263" x2="550" y2="140" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4" marker-end="url(#wf-arrow)"></line>
</svg>
</div>
<figcaption>The two guardrails that make the rest of this fast: a stakeholder-clarification branch whenever something's ambiguous, and nothing committed without an explicit go-ahead.</figcaption>
</figure>

The part that actually changes the experience is step 6 landing somewhere persistent. Established patterns, past gotchas, and rules I've set stick around between sessions instead of evaporating at the end of a chat window. Picking a task back up doesn't mean re-explaining the system from zero.

## Two Examples of Where the Discipline Paid Off

**A silently-wrong report.** One export report had been quietly hiding its first two rows of real data — not a crash, just an invisible layout bug in how header rows were being inserted, inconsistent with the pattern every other report in the system used. Nobody had noticed because nothing errored. Walking the export logic side by side and diffing it against a known-working report surfaced the mismatch in minutes rather than a long manual trace.

**A leak that had already happened.** An office coordinator flagged, almost in passing, that someone outside a case had seen details they shouldn't have. That's a very different kind of bug to chase than "the button doesn't work" — it meant systematically testing every role, every office-assignment state, and every view against real data instead of guessing at what the access rules probably were. That process turned up two separate gaps, not one, including a second one nobody had reported yet. Both got scoped and fixed the same day, with the fix shaped by how the client actually wanted access to work, not just a patch that made the symptom go away.

Neither of those came from "AI writes code fast." They came from being able to methodically check every case instead of the two or three a rushed manual review would cover.

## The Guardrails That Make Speed Safe

None of this works without rules that don't bend:

- Confirm what's about to be committed, every time, before committing it
- Never push to a remote without an explicit go-ahead — that decision stays mine
- Stay inside the ticket's actual scope; don't quietly fix unrelated things a teammate didn't ask for and might not want touched
- Check that test runs are hitting an isolated database, not development data, before anything destructive runs
- Don't mark a task done until I've actually confirmed the fix works — not before

These aren't limitations I'm working around. I set every one of them, deliberately, and they're the reason I trust moving fast in the first place.

## Where the Real Advantage Shows Up

The moment this pays off isn't a single fast fix — it's a single client meeting generating a dozen follow-up requests in one sitting, some trivial, some needing real design decisions, most touching modules I hadn't looked at in weeks. Working through that used to mean a slow ramp-up per item: re-reading old code, remembering why a field was named the odd thing it's named, re-establishing the rules for that corner of the system.

With context and established patterns carried between sessions, that ramp-up mostly disappears. Triage happens fast — which items are well-defined and ready to build versus which ones need a clarifying question first — and the well-defined ones move the same day. The win isn't code generation speed. It's that a batch of work which used to force a slowdown from sheer complexity increasingly doesn't.

## What Hasn't Changed

The client conversations, the tradeoff calls, what ships and when — that's all still mine, and it should stay that way. What's different is how much of the surrounding work — investigation, exhaustive testing, documentation, triage — I can hand off and actually trust. That's what lets me take on more at once without the quality dropping, which is the whole point.
