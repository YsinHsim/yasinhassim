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

<div class="post-media post-media-trio">
<figure><img src="/blog/flower-for-sharana/bud.jpg" alt="A closed golden bud on a green stem against a dark starry background, with the hint sentuh bunga ni" loading="lazy" /><figcaption>The bud, waiting</figcaption></figure>
<figure><img src="/blog/flower-for-sharana/bloom-burst.jpg" alt="Petals springing open with gold and pink pollen particles bursting from the centre" loading="lazy" /><figcaption>A fraction of a second after the tap</figcaption></figure>
<figure><img src="/blog/flower-for-sharana/bloom-note.jpg" alt="The fully bloomed pink flower with a note underneath" loading="lazy" /><figcaption>Full bloom and the note (a demo note here, not the real one)</figcaption></figure>
</div>


While it's blooming, petals occasionally drift down from the top of the screen and fade out as they fall — a small ambient touch so the page doesn't feel static once the flower's open.

## The Tech

It's deliberately boring in the best way: plain HTML, CSS, and vanilla JS, no framework, no build step, no dependencies. `python3 -m http.server` and you're previewing it.

**The bloom is pure CSS transitions, not JS animation.** Toggling a single `.bloomed` class on the flower element is enough — petals, leaves, and the center all have their own `transition` rules with staggered delays (petals use a `cubic-bezier(0.34, 1.56, 0.64, 1)` easing for that overshoot/springiness), so the whole unfurl is one class toggle away and the browser handles the actual animation work.

**Petals are generated, not hand-placed.** A `buildPetals()` function creates each petal `div` and sets a `--angle` CSS custom property per petal (`(360 / count) * i`), so an 8-petal outer ring and a 6-petal inner ring are both just loops writing angles into custom properties that the CSS reads.

**The background — stars, pollen burst, falling petals — is a `<canvas>` running its own `requestAnimationFrame` loop**, separate from the DOM/CSS bloom. Stars twinkle via a sine wave per star; the pollen burst on tap spawns ~34 particles with random velocity and lets gravity and alpha-fade retire them; falling petals spawn on a timer while the flower is bloomed and get culled once they're off-screen or past their lifespan.

**`prefers-reduced-motion` is respected throughout** — particle counts drop, transition durations shrink to 200ms, and the whole thing degrades gracefully instead of just ignoring the setting.

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 960 330" role="img" aria-label="One tap does two things. It toggles the bloomed class, and CSS transitions animate the petals, leaves and centre. It also spawns a pollen burst in a separate canvas loop that draws twinkling stars, pollen particles and falling petals.">
<defs>
<marker id="fl-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker>
</defs>
<g class="dg-accent">
<rect x="30" y="125" width="150" height="80" rx="40" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"></rect>
<text x="105" y="160" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">Tap</text>
<text x="105" y="182" text-anchor="middle" font-size="11" fill="currentColor" fill-opacity="0.8" font-family="JetBrains Mono, monospace">bloom()</text>
</g>
<g stroke="currentColor" stroke-opacity="0.55">
<path d="M184 150 C 230 110, 240 85, 276 80" fill="none" marker-end="url(#fl-arrow)"></path>
<path d="M184 180 C 230 220, 240 245, 276 250" fill="none" marker-end="url(#fl-arrow)"></path>
</g>
<text x="210" y="96" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">DOM layer</text>
<text x="200" y="250" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">canvas layer</text>
<rect x="280" y="30" width="300" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="300" y="60" font-size="13.5" font-weight="700" fill="currentColor">toggle .bloomed on the flower</text>
<text x="300" y="84" font-size="11.5" fill="currentColor" fill-opacity="0.65">one class, no JS animation code</text>
<text x="300" y="106" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">--angle per petal = 360 / count × i</text>
<rect x="640" y="30" width="290" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="660" y="60" font-size="13.5" font-weight="700" fill="currentColor">CSS transitions do the work</text>
<text x="660" y="84" font-size="11.5" fill="currentColor" fill-opacity="0.65">8 outer + 6 inner petals, staggered</text>
<text x="660" y="106" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">cubic-bezier(.34, 1.56, .64, 1)</text>
<line x1="584" y1="80" x2="634" y2="80" stroke="currentColor" stroke-opacity="0.55" marker-end="url(#fl-arrow)"></line>
<rect x="280" y="200" width="650" height="100" rx="12" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<text x="300" y="230" font-size="13.5" font-weight="700" fill="currentColor">&lt;canvas&gt; with its own requestAnimationFrame loop</text>
<g font-size="11.5" fill="currentColor" fill-opacity="0.7">
<text x="300" y="258">✦ stars twinkle on a sine wave</text>
<text x="520" y="258">✺ ~34 pollen particles, gravity + fade</text>
<text x="300" y="282">❀ petals drift down while bloomed, culled off-screen</text>
</g>
</svg>
</div>
<figcaption>Two independent layers: CSS owns the flower, a canvas loop owns everything floating around it.</figcaption>
</figure>


A couple of small, deliberate touches from later commits: `touch-action: manipulation` on the flower so mobile taps register faster (no 300ms delay waiting to see if it's a double-tap), and Open Graph meta tags so the link itself previews nicely when shared instead of showing a bare URL.

## The Personalization Bit

The whole point of the project is the message, so that's the one thing pulled to the very top of `script.js` as a `NOTE` object — `to`, `message` (with `\n` for line breaks), and `from`. Edit three strings, no need to touch markup or CSS, and the page is customized. I also translated the tap hints to Malay ("sentuh bunga ni" / "sentuh untuk mekar lagi") since that's the language the note itself is in.

## Where It Stands

It's finished and deployed — static site, no framework preset needed, straight onto Vercel. There's nothing left to build here; it did exactly the one job it was meant to do.
