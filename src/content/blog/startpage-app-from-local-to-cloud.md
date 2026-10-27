---
title: "startpage-app: Taking My New Tab Page From localStorage to the Cloud"
description: "How I rebuilt my personal startpage as an account-synced Next.js app — and why localStorage alone stopped being good enough."
pubDate: 2026-07-02
tags: ["Development", "Personal Projects"]
draft: false
---

## The Problem With My Old New Tab Page

A while back I built myself a personal "start page" — a custom new tab page with a clock, a greeting, quick links to the sites I use daily, a switchable search engine, and a wallpaper I actually liked looking at. It was a single ~500-line Nuxt/Vue page, and everything — my link groups, my chosen wallpaper, my preferred search engine — lived in `localStorage`.

<figure class="post-media">
<img src="/blog/startpage-app-from-local-to-cloud/old-startpage.jpg" alt="The original Nuxt start page: a clock and search box over a mountain sunset wallpaper, with quick-link icons in the top right" loading="lazy" />
<figcaption>The original Nuxt version: clock, search and quick links over a wallpaper. Everything you see was stored in this one browser.</figcaption>
</figure>


That worked fine right up until it didn't. Switch to a different browser, get a new laptop, or accidentally clear site data, and the whole setup was gone. I'd rebuild it, again, from scratch. For a page I look at dozens of times a day, that was more annoying than it had any right to be.

So I rebuilt it — this time as `startpage-app`, a Next.js app where all of that state lives in an actual account instead of a browser tab.

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 960 360" role="img" aria-label="Before: settings lived in one browser's localStorage and were lost with a new laptop or cleared data. After: the browser signs in with Google through NextAuth, and Next.js stores settings through Prisma in a Neon Postgres database, so any browser gets the same setup.">
<defs>
<marker id="sp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker>
</defs>
<text x="30" y="34" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">BEFORE · NUXT PAGE</text>
<rect x="30" y="50" width="250" height="120" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="155" y="82" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">One browser</text>
<text x="155" y="108" text-anchor="middle" font-size="11.5" fill="currentColor" fill-opacity="0.75" font-family="JetBrains Mono, monospace">localStorage</text>
<text x="155" y="130" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.6">links · wallpaper · search engine</text>
<g class="dg-warm">
<text x="155" y="200" text-anchor="middle" font-size="12" fill="currentColor">✗ new laptop, other browser,</text>
<text x="155" y="218" text-anchor="middle" font-size="12" fill="currentColor">or cleared site data = gone</text>
</g>
<line x1="320" y1="30" x2="320" y2="330" stroke="currentColor" stroke-opacity="0.2" stroke-dasharray="4 5"></line>
<text x="360" y="34" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">AFTER · STARTPAGE-APP</text>
<rect x="360" y="50" width="160" height="70" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="440" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Any browser</text>
<text x="440" y="100" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.6">laptop · phone · work PC</text>
<g class="dg-accent">
<rect x="590" y="50" width="160" height="70" rx="12" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"></rect>
<text x="670" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Next.js 15</text>
<text x="670" y="100" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.8">App Router · React 19</text>
</g>
<rect x="590" y="200" width="160" height="70" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="670" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">NextAuth</text>
<text x="670" y="250" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.6">Google OAuth · JWT session</text>
<rect x="790" y="50" width="150" height="70" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="865" y="80" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Prisma</text>
<text x="865" y="100" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.6">validated writes</text>
<rect x="790" y="200" width="150" height="70" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="865" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Neon Postgres</text>
<text x="865" y="250" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.6">one account, one setup</text>
<g stroke="currentColor" stroke-opacity="0.55">
<line x1="524" y1="85" x2="584" y2="85" marker-end="url(#sp-arrow)"></line>
<line x1="670" y1="124" x2="670" y2="194" marker-end="url(#sp-arrow)"></line>
<line x1="754" y1="85" x2="784" y2="85" marker-end="url(#sp-arrow)"></line>
<line x1="865" y1="124" x2="865" y2="194" marker-end="url(#sp-arrow)"></line>
</g>
<text x="682" y="164" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">who are you?</text>
<g class="dg-accent">
<text x="650" y="320" text-anchor="middle" font-size="12" fill="currentColor">✓ sign in anywhere and the same links, wallpapers and engine load</text>
</g>
</svg>
</div>
<figcaption>Same features, different home for the data: from one browser's localStorage to an account in Postgres.</figcaption>
</figure>


## What It Does Now

Sign in with Google and you get a dashboard with:

- A live clock and date, plus a time-of-day greeting ("Good Morning/Afternoon/Evening/Night") with a text color you can pick from a small curated palette
- A search bar with a switchable search engine (Google, DuckDuckGo, or your own)
- Custom link groups — bookmark folders, each with its own icon, fully CRUD-able, with a couple of sensible defaults ("AI Assistant," "Social Media") auto-created on sign-up
- A wallpaper gallery — save several, switch between them, delete the ones you don't want anymore
- A floating, draggable YouTube Music mini-player, because a new tab page is a good place for that
- Dark/light theme toggle

None of it is tied to a single browser anymore. Sign in anywhere and it's all there.

<figure class="post-media post-media-narrow">
<img src="/blog/startpage-app-from-local-to-cloud/login.jpg" alt="startpage-app login card with a Sign in with Google button" loading="lazy" />
<figcaption>The only new step: one Google sign-in, then the dashboard loads your saved setup.</figcaption>
</figure>


## The Stack, and a Couple of Real Gotchas

Under the hood it's Next.js 15 (App Router) with React 19, NextAuth for Google OAuth, and Prisma talking to a Neon-hosted Postgres database. A couple of decisions worth calling out:

**JWT sessions instead of database sessions.** NextAuth's Prisma adapter still persists accounts and users to the database, but I deliberately kept sessions as JWTs rather than DB-backed — it avoids a database round trip on every single request once a token's been issued.

**Server-side validation of "curated" choices.** Things like the greeting color and the link-group icons are picked from a fixed list defined in code, not stored as arbitrary strings the client sends up. The server validates against that enum rather than trusting whatever the client claims it picked.

**A subtle App Router trap.** At one point `layout.tsx` had been turned into a Client Component just to host `SessionProvider` and `ThemeProvider` — which silently disables the file's `metadata` export. My tab title and favicon quietly broke and I didn't notice for a while. Fix was straightforward once I found it: pull those providers into their own client component and let `layout.tsx` stay a Server Component.

## The July 1 Rewrite

Most of this came together in one intensive day of work on July 1st, where I brought the app up to full feature parity with the old Nuxt version — link groups, the music player, wallpaper management, search engine sync — and along the way patched two real CVEs, including a critical (CVSS 10.0) RCE in Next.js's React Flight protocol that had landed in a recent release. Worth saying plainly: a good chunk of that day's work was done pair-programming with Claude Sonnet 5, which made moving that fast on a rewrite like this a lot more feasible.

## Where It Stands

It's feature-complete relative to the old app, plus the account-sync piece that was the whole point of rebuilding it. But it's not polished — there's no test suite yet, a bit of mock fallback data still wired into the dashboard from earlier development, and the database schema already has `displayOrder` columns sitting there unused, waiting on a drag-to-reorder UI I haven't built yet.

Next up: cleaning out that leftover mock data, and finally wiring up reordering for links and groups so the last bit of the old app's polish makes it into this one too.
