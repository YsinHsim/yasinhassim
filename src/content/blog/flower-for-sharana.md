---
title: "flower-for-sharana: A Bud That Blooms on Tap"
description: "A tiny, no-build interactive page I built as a personal gift — a CSS/canvas flower that unfurls into bloom and reveals a note underneath."
pubDate: 2026-08-10
tags: ["Development", "Personal Projects"]
draft: false
---

## Why I Built This

Not every project needs to be a big rebuild with a database and an OAuth flow. Sometimes you just want to send someone a link that makes them smile. That's what `flower-for-sharana` is — a single page with a closed flower bud sitting in the dark. You tap it, it blooms, and a personal note fades in underneath.

No app, no sign-in, no dashboard. Just a bud, a bloom, and a message.

## What It Does

Land on the page and there's a greeting ("Asalamualaikum"), a dark starry background, and a closed flower with a small hint underneath it — "sentuh bunga ni" ("tap the flower"). Tap it and:

- The bud's leaves and petals unfurl outward with a springy, staggered animation
- A burst of gold and pink pollen particles scatters from the center
- The hint fades out and, a beat later, a personal note fades in below the flower
- Tap again and it closes back up, ready for another bloom

While it's blooming, petals occasionally drift down from the top of the screen and fade out as they fall — a small ambient touch so the page doesn't feel static once the flower's open.

## The Tech

It's deliberately boring in the best way: plain HTML, CSS, and vanilla JS, no framework, no build step, no dependencies. `python3 -m http.server` and you're previewing it.

**The bloom is pure CSS transitions, not JS animation.** Toggling a single `.bloomed` class on the flower element is enough — petals, leaves, and the center all have their own `transition` rules with staggered delays (petals use a `cubic-bezier(0.34, 1.56, 0.64, 1)` easing for that overshoot/springiness), so the whole unfurl is one class toggle away and the browser handles the actual animation work.

**Petals are generated, not hand-placed.** A `buildPetals()` function creates each petal `div` and sets a `--angle` CSS custom property per petal (`(360 / count) * i`), so an 8-petal outer ring and a 6-petal inner ring are both just loops writing angles into custom properties that the CSS reads.

**The background — stars, pollen burst, falling petals — is a `<canvas>` running its own `requestAnimationFrame` loop**, separate from the DOM/CSS bloom. Stars twinkle via a sine wave per star; the pollen burst on tap spawns ~34 particles with random velocity and lets gravity and alpha-fade retire them; falling petals spawn on a timer while the flower is bloomed and get culled once they're off-screen or past their lifespan.

**`prefers-reduced-motion` is respected throughout** — particle counts drop, transition durations shrink to 200ms, and the whole thing degrades gracefully instead of just ignoring the setting.

A couple of small, deliberate touches from later commits: `touch-action: manipulation` on the flower so mobile taps register faster (no 300ms delay waiting to see if it's a double-tap), and Open Graph meta tags so the link itself previews nicely when shared instead of showing a bare URL.

## The Personalization Bit

The whole point of the project is the message, so that's the one thing pulled to the very top of `script.js` as a `NOTE` object — `to`, `message` (with `\n` for line breaks), and `from`. Edit three strings, no need to touch markup or CSS, and the page is customized. I also translated the tap hints to Malay ("sentuh bunga ni" / "sentuh untuk mekar lagi") since that's the language the note itself is in.

## Where It Stands

It's finished and deployed — static site, no framework preset needed, straight onto Vercel. There's nothing left to build here; it did exactly the one job it was meant to do.
