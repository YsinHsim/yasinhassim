---
title: "Kuiz Interaktif: A Kahoot-Style Quiz Game With No Backend"
description: "How I built a multiplayer quiz for workshops where the host's browser tab is the game server, and phones connect to it directly over WebRTC."
pubDate: 2026-10-18
tags: ["Development", "Personal Projects"]
draft: false
---

## Why I Built This

The starting point was a workshop: the e-NORES session in Kota Kinabalu with Jabatan Tenaga Kerja Sabah, covering the licence to employ non-resident workers. Sessions like that usually open with an ice-breaker and close with a short knowledge check, and the format everyone knows is Kahoot. The host puts questions on the projector, everyone scans a QR code, and they answer on their phones against a timer.

Kahoot would have done the job. Honestly, this was a side project: I wanted to see whether I could build the same experience with **no backend at all**. No server, no database, no accounts. Just static files on Vercel, and nothing I have to keep running.

The result is Kuiz Interaktif. The whole interface is in Bahasa Melayu, because that's who it's for.

<figure class="post-media">
<img src="/blog/kuiz-interaktif-multiplayer-quiz-without-a-backend/host-lobby.jpg" alt="Kuiz Interaktif host screen: a QR code and room code 6742 on the left, quiz settings and three joined players on the right" loading="lazy" />
<figcaption>The host screen on the projector: scan the QR code or type the room code. Three players are already in.</figcaption>
</figure>


## How It Works Without a Server

The trick is that the **host's browser tab is the game server**.

- The host opens `#/host` on the laptop connected to the projector. It shows a 4-digit room code and a QR code.
- Players scan the QR code, which opens `#/join/<code>` on their phone, and type a name.
- Each phone opens a direct WebRTC data channel to the host tab using [PeerJS](https://peerjs.com/). The public `0.peerjs.com` broker is only used so the browsers can find each other. After that, game traffic goes peer to peer.
- The host tab holds everything: the questions, the timer, every player's answers, and the scores. Phones only ever receive a snapshot of the state they're allowed to see.

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 960 420" role="img" aria-label="The host browser tab holds the questions, timer, answers and scores. Phones connect to it directly over WebRTC data channels. The PeerJS broker is only used so the browsers can find each other.">
<defs>
<marker id="kz-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker>
</defs>
<rect x="360" y="20" width="240" height="70" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-dasharray="5 5"></rect>
<text x="480" y="50" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">PeerJS broker</text>
<text x="480" y="72" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">0.peerjs.com · introductions only</text>
<path d="M380 90 C 300 130, 260 150, 230 170" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 5"></path>
<path d="M580 90 C 640 130, 680 140, 700 150" fill="none" stroke="currentColor" stroke-opacity="0.35" stroke-dasharray="4 5"></path>
<g class="dg-accent">
<rect x="30" y="170" width="300" height="200" rx="14" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"></rect>
<text x="180" y="204" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">Host tab (#/host)</text>
<text x="180" y="224" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.8" font-family="JetBrains Mono, monospace">the laptop on the projector</text>
</g>
<g font-size="12.5" fill="currentColor">
<text x="58" y="262">• questions and correct answers</text>
<text x="58" y="286">• the timer (pings every 3 s)</text>
<text x="58" y="310">• every player's answer</text>
<text x="58" y="334">• scores, saved to localStorage</text>
</g>
<g font-size="13" fill="currentColor">
<rect x="700" y="130" width="200" height="64" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="800" y="160" text-anchor="middle" font-weight="700">Phone · Aisyah</text>
<text x="800" y="179" text-anchor="middle" font-size="11" fill-opacity="0.6" font-family="JetBrains Mono, monospace">#/join/6742</text>
<rect x="700" y="230" width="200" height="64" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="800" y="260" text-anchor="middle" font-weight="700">Phone · Daniel</text>
<text x="800" y="279" text-anchor="middle" font-size="11" fill-opacity="0.6" font-family="JetBrains Mono, monospace">#/join/6742</text>
<rect x="700" y="330" width="200" height="64" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="800" y="360" text-anchor="middle" font-weight="700">Phone · Mei Ling</text>
<text x="800" y="379" text-anchor="middle" font-size="11" fill-opacity="0.6" font-family="JetBrains Mono, monospace">#/join/6742</text>
</g>
<g class="dg-accent" stroke="currentColor" stroke-width="1.5">
<line x1="334" y1="230" x2="694" y2="165" marker-start="url(#kz-arrow)" marker-end="url(#kz-arrow)"></line>
<line x1="334" y1="270" x2="694" y2="262" marker-start="url(#kz-arrow)" marker-end="url(#kz-arrow)"></line>
<line x1="334" y1="310" x2="694" y2="360" marker-start="url(#kz-arrow)" marker-end="url(#kz-arrow)"></line>
</g>
<text x="515" y="222" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.7" font-family="JetBrains Mono, monospace" transform="rotate(-10 515 222)">WebRTC data channel</text>
<text x="515" y="410" text-anchor="middle" font-size="11.5" fill="currentColor" fill-opacity="0.65">Phones get a snapshot of what they may see. The answer stays on the host until the reveal.</text>
</svg>
</div>
<figcaption>No server in the middle: the broker only introduces the browsers, then the host tab runs the game.</figcaption>
</figure>


That last point matters more than it sounds. The correct answer is never sent to phones until the host reveals it. For typed answers, the list of accepted answers never leaves the host at all. Opening dev tools on your phone doesn't help you cheat.

<div class="post-media post-media-trio">
<figure><img src="/blog/kuiz-interaktif-multiplayer-quiz-without-a-backend/phone-join.jpg" alt="Phone join form with room code 6742 and the name Aisyah" loading="lazy" /><figcaption>Join with the code</figcaption></figure>
<figure><img src="/blog/kuiz-interaktif-multiplayer-quiz-without-a-backend/phone-question.jpg" alt="Phone answer screen with four coloured choices and a countdown" loading="lazy" /><figcaption>Pick an answer</figcaption></figure>
<figure><img src="/blog/kuiz-interaktif-multiplayer-quiz-without-a-backend/phone-reveal.jpg" alt="Phone result screen saying Betul with 908 points" loading="lazy" /><figcaption>Find out after the reveal</figcaption></figure>
</div>


It's built with Vue 3 and Vite. The full set of dependencies is PeerJS, a QR code generator, and `canvas-confetti` for the final results screen.

## The Parts That Took Real Thought

**Surviving a refresh.** If the host's tab dies, the game dies, so the README literally says "don't close the host tab." But a refresh shouldn't be fatal. The host saves the whole game state to `localStorage` after every change and resumes it if the tab comes back within three hours. Each player gets a random ID stored in `sessionStorage`, so when their phone reconnects, the host matches them back to their existing name and score instead of creating a duplicate.

**Reclaiming the room code.** After a refresh, the host tries to re-register the same peer ID, but the PeerJS broker often still thinks the old tab owns it. If the game hasn't started and nobody has joined, the host just picks a new code. If players are already in, it keeps retrying the same code for about 30 seconds, so their phones can find it again.

**A bug I'm glad I caught early.** My first version of that retry logic had every event handler refer to "the current peer." After a retry, late events from the *old*, destroyed peer would fire and act on the *new* one, tearing down a perfectly healthy connection. The fix was to have each handler capture its own peer instance and ignore events from any peer that's no longer the active one. It's a small change, but it's the kind of bug that would only show up on bad Wi-Fi, which is exactly what a conference room has.

**Knowing the host is still there.** The host pings every phone every 3 seconds with the remaining time. If a phone hears nothing for 10 seconds, it assumes the connection is dead and reconnects. The ping also keeps everyone's countdown in sync with the host's clock instead of trusting each phone's own timer.

**Scoring.** A correct answer is worth 500 points plus up to 500 more for speed, scaled by how much time was left. The host can also manually mark a typed answer right or wrong, for when someone writes something reasonable that the matcher didn't expect.

<figure class="post-media">
<img src="/blog/kuiz-interaktif-multiplayer-quiz-without-a-backend/host-reveal.jpg" alt="Host screen after the reveal: the answer Rumah kampung highlighted, vote counts per choice, and the scoreboard" loading="lazy" />
<figcaption>After the reveal: votes per choice and the scoreboard. Both correct players scored, but not equally: the faster answer earns more.</figcaption>
</figure>


**Typed answers.** The ice-breaker quiz supports a "type your answer" mode as well as multiple choice. Answers go through a forgiving matcher: it lowercases, strips accents and punctuation, and allows one or two typos depending on word length, so "kucng" still counts as "kucing" and "durain" counts as "durian".

My first version of the matcher was a bit *too* forgiving. It also accepted an answer if it merely contained a correct word anywhere, which meant typing `kucing basikal bot rumah` would score on any question whose answer was one of those, and `bukan kucing` ("not a cat") counted as "cat". Now the whole answer has to be within typo distance of an accepted answer. While fixing that, I also found that swapped letters ("durain") counted as two typos rather than one, so a 6-letter word was rejected despite being the exact example in my own code comment. Both are fixed.

## Two Quizzes, Easy to Add More

There are currently two quizzes:

- **Teka Imej Dalam Perkataan**: 10 picture questions where you spot the image hidden in the letters of a word. Choices are shuffled per game.
- **Kuiz e-NORES**: 5 questions on the non-resident worker licence under the Sabah Labour Ordinance, with an explanation shown after each answer.

Each quiz is just a JavaScript file with a list of questions, so adding one means copying an existing file and registering it. The results screen breaks down every question: what percentage got it right, the most common wrong answer, and the average time for correct answers. That turns out to be more useful to a trainer than the leaderboard, because it shows exactly which point the room didn't understand.

<figure class="post-media">
<img src="/blog/kuiz-interaktif-multiplayer-quiz-without-a-backend/host-stats.jpg" alt="Final results Analisis Soalan tab: 67 percent overall accuracy and a per-question bar of correct and wrong answers" loading="lazy" />
<figcaption>The question analysis tab. With ten questions, this is where the hardest one stands out.</figcaption>
</figure>


## The Honest Limitations

- **WebRTC doesn't get through every network.** Strict corporate firewalls can block it. The workaround in the guide is to ask players to switch to mobile data.
- **It's sized for one room.** One laptop acting as the server for every phone is designed for around 30–50 players. I wouldn't try 500.
- **Analytics can't tell host from player.** I added Cloudflare Web Analytics, but because the app uses hash routes (`#/host`, `#/join`), every visit counts as `/`.

## Where It Stands

The first working version came together in one day, October 14, pair-programming with Claude. That included the game itself, the quiz picker, fullscreen mode and the in-app guide. The next two days went to fixes and polish: the peer-retry bug above, and a review screen so players can go back through every question and their own answers after the game.

It hasn't been run with a real audience yet, so the 30–50 player figure and the reconnect logic are still untested under load. That's the real test I'm waiting for.

Next up: a fix for a rare case where a phone can get stuck on "answer sent" if the connection drops at exactly the wrong moment.

You can try it at [kuiz-interaktif.vercel.app](https://kuiz-interaktif.vercel.app/). Open it on a laptop as the host, then join from your phone.
