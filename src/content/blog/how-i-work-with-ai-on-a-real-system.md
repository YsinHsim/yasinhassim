---
title: "How I Actually Work With AI on a Live Production System"
description: "Not a toy project: a years-old system with real clients and real data. The full lifecycle I run with Claude, from a new ticket to a merged batch, the change-request paperwork, and the rules file that came out of real mistakes."
pubDate: 2026-08-18
updatedDate: 2026-10-20
heroImage: "/blog/how-i-work-with-ai-on-a-real-system/poster.jpg"
tags: ["AI", "Development", "Workflow"]
draft: false
---

<div class="post-badge-row">
  <span class="post-badge">Live production system</span>
  <span class="post-badge">Public-sector client</span>
  <span class="post-badge">Claude Code</span>
  <span class="post-badge">Updated October 2026</span>
</div>

<div class="post-callout post-callout-tldr">
  <div class="post-callout-title">TL;DR</div>
  <ul>
    <li>The AI does the legwork: reading code, scoping work, building, testing against real data, drafting every update.</li>
    <li>Every write that other people see waits for my explicit yes: creating tickets, commits, tracker updates, messages.</li>
    <li>A rules file carries what I've corrected between sessions. Most of its rules exist because something went wrong once.</li>
    <li>Result: one sitting took a large ticket from "new" to four subtasks in review, without the quality dropping.</li>
  </ul>
</div>

## Most AI-Coding Stories Are Toy Examples

Ask an AI to build a todo app from scratch and it looks impressive in a screen recording. That's not the situation most working developers are in. I spend most of my time on a case-management platform used by a public-sector client: years of accumulated modules, dashboards and report exports, other people's code, real cases with real people's data behind them, and a project process that expects logged, reviewable work rather than "it works on my machine." Nothing about that project gets rebuilt clean. It has to be understood and extended carefully.

Here's what that looks like with an AI assistant in the loop. Not a demo, the day-to-day.

## One Session, Replayed

The clip below reenacts a real session from this month, with names and identifiers changed. A ticket asked for PDF export across 18 report tables. Watch the moments where the session stops and waits.

<figure class="post-media">
<video src="/blog/how-i-work-with-ai-on-a-real-system/session-replay.mp4" autoplay loop muted playsinline preload="metadata" poster="/blog/how-i-work-with-ai-on-a-real-system/poster.jpg" width="1280" height="720" aria-label="Reenacted session: a ticket for PDF export on 18 reports arrives; the AI reads the code, drafts four subtasks and waits for a yes; it builds and tests against real data, waits for a yes to commit, drafts the tracker update and waits for a yes before moving the subtask to In Review."></video>
<figcaption>Reenactment of a real session, names changed. The purple prompts are the gates: nothing past them happens without my "yes".</figcaption>
</figure>

That's the whole idea in 26 seconds. The rest of this post is the process behind it.

## The Lifecycle, End to End

Work comes in through the team's issue tracker, never from a prompt I invent. Over a few months the session settled into a fixed lifecycle. It isn't Claude's default behavior; it's a routine I established and corrected until it stuck.

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 1320 400" role="img" aria-label="Lifecycle in two rows. Row one: ticket, investigate code and data, scope into subtasks (a gate), build, verify against real data. Row two: commit (a gate), tracker update (a gate), in review, batch merge request, senior review, done. Gates are highlighted and labelled 'waits for my yes'.">
<defs><marker id="lc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
<text x="20" y="26" font-size="13" font-weight="700" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace">BUILD THE WORK</text>
<line x1="230" y1="100" x2="268" y2="100" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<line x1="490" y1="100" x2="528" y2="100" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<line x1="750" y1="100" x2="788" y2="100" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<line x1="1010" y1="100" x2="1048" y2="100" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<rect x="20" y="50" width="210" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="125" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">1 · TICKET</text>
<text x="125" y="116" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">from the tracker</text>
<rect x="270" y="50" width="220" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="380" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">2 · INVESTIGATE</text>
<text x="380" y="116" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">code + real data first</text>
<rect x="530" y="45" width="220" height="110" rx="12" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-secondary)" stroke-width="2"></rect>
<text x="640" y="88" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">3 · SCOPE</text>
<text x="640" y="108" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">draft subtasks</text>
<text x="640" y="132" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent-secondary)" font-family="JetBrains Mono, monospace">waits for my yes</text>
<rect x="790" y="50" width="220" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="900" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">4 · BUILD</text>
<text x="900" y="116" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">inside the ticket only</text>
<rect x="1050" y="50" width="250" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="1175" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">5 · VERIFY</text>
<text x="1175" y="116" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">against real data</text>
<polyline points="1175,150 1175,185 125,185 125,218" fill="none" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></polyline>
<text x="140" y="208" font-size="13" font-weight="700" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace">SHIP THE WORK</text>
<line x1="230" y1="270" x2="268" y2="270" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<line x1="450" y1="270" x2="488" y2="270" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<line x1="670" y1="270" x2="708" y2="270" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<line x1="890" y1="270" x2="928" y2="270" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<line x1="1110" y1="270" x2="1148" y2="270" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#lc-arrow)"></line>
<rect x="20" y="215" width="210" height="110" rx="12" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-secondary)" stroke-width="2"></rect>
<text x="125" y="258" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">6 · COMMIT</text>
<text x="125" y="278" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">one per repo per task</text>
<text x="125" y="302" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent-secondary)" font-family="JetBrains Mono, monospace">waits for my yes</text>
<rect x="270" y="215" width="180" height="110" rx="12" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-secondary)" stroke-width="2"></rect>
<text x="360" y="258" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">7 · TRACKER</text>
<text x="360" y="278" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">time · notes · status</text>
<text x="360" y="302" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--accent-secondary)" font-family="JetBrains Mono, monospace">waits for my yes</text>
<rect x="490" y="220" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="580" y="264" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">8 · IN REVIEW</text>
<text x="580" y="286" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">tasks pile up</text>
<rect x="710" y="220" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="800" y="264" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">9 · BATCH MR</text>
<text x="800" y="286" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">one per repo</text>
<rect x="930" y="220" width="180" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="1020" y="264" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">10 · SENIOR</text>
<text x="1020" y="286" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">reviews + merges</text>
<rect x="1150" y="220" width="150" height="100" rx="12" fill="none" stroke="var(--accent-primary)" stroke-width="2"></rect>
<text x="1225" y="264" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">11 · DONE</text>
<text x="1225" y="286" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">closed by me</text>
<rect x="530" y="352" width="14" height="14" rx="3" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-secondary)" stroke-width="2"></rect>
<text x="552" y="364" font-size="13" fill="currentColor" fill-opacity="0.7">= a gate: the AI drafts it, shows me exactly what it will write, and stops</text>
</svg>
</div>
<figcaption>Eleven stages, three gates. Between gates the AI reads, builds and drafts; everything other people will see passes through a gate.</figcaption>
</figure>

**Ticket and investigation.** I start a session with one line: check out this ticket. The AI pulls the issue, its subtasks and its comment history, then tells me what's done, what's blocked and what's left. Before it proposes anything, it reads the code and queries real data. "The report probably uses the same header layout as the others" is a guess. "Here are the 18 export classes and how each one lays out its headers" is a fact.

**Scoping.** Big tickets get split. The AI drafts subtasks with titles, files and acceptance notes, and the draft sits in the chat until I approve it. It only creates them in the tracker after I say so, assigned to me. That rule exists because an early session assigned a ticket to the wrong person.

**Build and verify.** The build stays strictly inside the ticket. Verification means running the new code against real data, not "it compiles." In the replayed session that meant comparing column counts and total rows of each new PDF against the existing Excel export, rendering the PDFs to look at them, and checking the empty-data case.

**Commit and tracker.** Commits use the ticket code as their scope (`feat(#143): …`), one per repository per task, and only when I say commit. Closing a task means logging time (I give the number; it never guesses), posting the commit references, appending a short resolution to the description and moving the status. All of that is drafted, shown to me in full, and written only after a yes.

**Review and release.** Finished tasks collect in review. When I'm ready, the AI prepares one merge request per repository for the whole batch: a short table of tasks, plus notes on anything that needs care at deploy time (migrations, config, new packages). Per-task detail already lives on each ticket, so the merge request stays readable even with a dozen tasks in it. Once I've opened the merge requests, it writes the message to my senior and, after another yes, replies on each ticket with its merge request link so every ticket traces to the code that closed it.

## One Ticket, One Sitting

Here's what the replayed session added up to. These numbers are from the real session.

<div class="post-table-wrap">

| What | Count |
|---|---|
| Report tables that got PDF export | 18 |
| Subtasks drafted, approved, then created | 4 |
| Commits (backend + frontend, per subtask) | 8 |
| Shared PDF templates reused, not rebuilt | 1 |
| Existing bugs found along the way | 3 |
| Existing bugs fixed along the way | 0 |

</div>

That last pair is deliberate. While building, the AI found three bugs that already existed: a data class that crashed on one filter mode, a report title with the wrong code in it, and a year filter that didn't narrow three reports at all. It reported all three in the ticket and fixed none of them. They're outside the ticket, and teammates reviewing my merge request shouldn't have to ask why a PDF task touched an unrelated query. Each one can become its own ticket.

It also corrected itself. Mid-session it flagged one report as returning all zeros. A few steps later it noticed the test had passed the year in the wrong unit, re-ran it, and told me plainly that the earlier claim was wrong. That's the behavior I want: a wrong claim retracted in the next message, not quietly left in the record.

## Change Requests: When the Work Needs Paperwork

Some tickets aren't bugs. They're changes to what the system does, and the client signs off on those with an official change request form. Filling that form by hand for each one was slow, so it's now part of the flow.

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 1100 200" role="img" aria-label="Change request flow: a ticket marked as a change request feeds a script that fills the client's official form as a PDF; I check it and share it; the client fills in the requester details and signs; then the work runs through the normal lifecycle.">
<defs><marker id="cr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
<line x1="220" y1="90" x2="258" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#cr-arrow)"></line>
<line x1="490" y1="90" x2="528" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#cr-arrow)"></line>
<line x1="740" y1="90" x2="778" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#cr-arrow)"></line>
<rect x="20" y="40" width="200" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="120" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">CR TICKET</text>
<text x="120" y="106" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">marked [CR]</text>
<rect x="260" y="35" width="230" height="110" rx="12" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-primary)" stroke-width="2"></rect>
<text x="375" y="78" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">FORM GENERATED</text>
<text x="375" y="100" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">script fills the official PDF</text>
<text x="375" y="120" text-anchor="middle" font-size="12.5" fill="var(--accent-primary)" font-weight="700" font-family="JetBrains Mono, monospace">checked before sharing</text>
<rect x="530" y="40" width="210" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="635" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">CLIENT SIGNS</text>
<text x="635" y="106" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">requester fields are theirs</text>
<rect x="780" y="40" width="300" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="930" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">NORMAL LIFECYCLE</text>
<text x="930" y="106" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">investigate → … → done</text>
</svg>
</div>
<figcaption>The form is generated from the ticket, so the paperwork and the work describe the same change.</figcaption>
</figure>

When I ask for a change request, the AI reads the ticket and adds an entry to a small JSON file. A script stamps it onto the client's official two-page form: module, date requested, and a description that's one lead sentence plus two to four bullets so it fits the box. The AI renders the first page and looks at it before handing it over. The requester's name, signature and approval sections stay blank. Those belong to the client, and filling them in for them would be presumptuous at best.

The content conventions came from the forms already approved before this existed: English descriptions that keep the system's own screen names, dates in the client's format, file names that start with the ticket code. Copying what already got signed beats inventing a style.

## The Rules File: Lessons That Stick

The part that changes the experience most isn't any single fast fix. It's that corrections persist. When I correct the AI, the correction goes into a small rules file that loads at the start of every session. Picking a task back up doesn't mean re-explaining the system, or re-learning a lesson the hard way.

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 1100 220" role="img" aria-label="Memory loop: something goes wrong in a session, I correct it, the correction is saved as a rule with the reason behind it, and the next session starts with that rule loaded, so the same mistake doesn't happen again.">
<defs><marker id="mem-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
<line x1="230" y1="90" x2="278" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#mem-arrow)"></line>
<line x1="500" y1="90" x2="548" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#mem-arrow)"></line>
<line x1="790" y1="90" x2="838" y2="90" stroke="currentColor" stroke-opacity="0.5" marker-end="url(#mem-arrow)"></line>
<path d="M960,140 C960,200 120,200 120,145" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="4 4" marker-end="url(#mem-arrow)"></path>
<text x="540" y="212" text-anchor="middle" font-size="12" fill="currentColor" fill-opacity="0.55" font-family="JetBrains Mono, monospace">the next time the same situation comes up</text>
<rect x="20" y="40" width="210" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="125" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">SOMETHING SLIPS</text>
<text x="125" y="106" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">in a real session</text>
<rect x="280" y="40" width="220" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="390" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">I CORRECT IT</text>
<text x="390" y="106" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">and say why</text>
<rect x="550" y="35" width="240" height="110" rx="12" fill="currentColor" fill-opacity="0.06" stroke="var(--accent-primary)" stroke-width="2"></rect>
<text x="670" y="78" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">RULE SAVED</text>
<text x="670" y="100" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">rule + why + how to apply</text>
<text x="670" y="120" text-anchor="middle" font-size="12.5" fill="var(--accent-primary)" font-weight="700" font-family="JetBrains Mono, monospace">one fact per file</text>
<rect x="840" y="40" width="240" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="960" y="84" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">NEXT SESSION</text>
<text x="960" y="106" text-anchor="middle" font-size="12.5" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">starts with it loaded</text>
</svg>
</div>
<figcaption>Each rule keeps the reason it exists. A rule without its reason gets applied too literally or quietly dropped.</figcaption>
</figure>

Almost every rule has a story behind it:

<div class="post-table-wrap">

<table class="post-ioc">
<thead><tr><th>Rule</th><th>Why it exists</th></tr></thead>
<tbody>
<tr><td>Show me every tracker create or update before writing it</td><td>A ticket was once assigned to the wrong teammate because an ID was assumed, not checked</td></tr>
<tr><td>Check the test database is isolated before running feature tests</td><td>One test run reset the local development database. Recovering it took hours</td></tr>
<tr><td>Stay inside the ticket. Report unrelated bugs, don&#x27;t fix them</td><td>Teammates pushed back on review when changes showed up that nobody asked for</td></tr>
<tr><td>Ask me for logged time, never estimate it</td><td>Time logs are a record other people rely on, so they have to come from me</td></tr>
<tr><td>Follow the known-good pattern for report exports</td><td>A report silently hid its first two data rows because it built its headers differently from every other report</td></tr>
<tr><td>Write internal notes in English, client-facing text in the client&#x27;s language</td><td>Tickets are read by the whole team; screens and letters are read by the client</td></tr>
</tbody>
</table>
</div>

The rules file also holds process: the lifecycle above, the commit format, the batch merge request template, the status-update format I send to the team. "Close this task" now means the same steps every time, in the same order, with the same confirmation before anything is written.

## Two Examples Where the Discipline Paid Off

**A silently wrong report.** One export had been quietly hiding its first two rows of real data. Not a crash, just a layout bug in how its header rows were inserted, different from the pattern every other report used. Nobody had noticed because nothing errored. Walking through the export logic and comparing it with a known-good report found the mismatch in minutes instead of a long manual trace. The fix became a rule, so the next report starts from the right pattern.

**A leak that had already happened.** An office coordinator mentioned, almost in passing, that someone outside a case had seen details they shouldn't have. That's a very different bug to chase than "the button doesn't work." It meant systematically testing every role, every office-assignment state and every view against real data instead of guessing at what the access rules probably were. That turned up two separate gaps, not one, including a second that nobody had reported yet. Both were scoped and fixed the same day, shaped by how the client actually wanted access to work rather than patched until the symptom went away.

Neither came from "AI writes code fast." They came from being able to check every case methodically, instead of the two or three a rushed manual review would cover.

## What Hasn't Changed

The client conversations, the trade-off calls, what ships and when: that's all still mine, and it should stay that way. The gates make that concrete. The AI can read anything, draft anything and build inside the ticket, but nothing reaches the tracker, the repository or another person until I've seen exactly what it will say and said yes.

What's different is how much of the surrounding work I can hand off and actually trust: investigation, exhaustive testing, paperwork, the release notes nobody enjoys writing. That's what lets me take on more at once without the quality dropping, which was the whole point.
