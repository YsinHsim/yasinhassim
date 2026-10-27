---
title: "Rebuilding My Resume to Actually Get Past an ATS"
description: "I wasn't sure my old resume would survive an applicant tracking system, so I rebuilt it from scratch and put a download link on my portfolio."
pubDate: 2026-08-10
tags: ["Development", "Personal Projects"]
draft: false
---

## The Problem

I had a resume sitting in my Documents folder that I'd been using for a while, but I genuinely didn't know if it would parse cleanly through an Applicant Tracking System (ATS) — the software most companies run resumes through before a human ever sees them. On top of that, my portfolio site had no way to actually download a resume, which felt like an obvious gap for a site whose whole point is "here's my work, hire me."

## What Was Actually Wrong

Going through the old PDF line by line surfaced a few real issues:

- Inconsistent bullet formatting — some lines were missing a space after the dash
- "Now" instead of a standard date format like "Present"
- A typo ("Profesional" instead of "Professional")
- Skills dumped into one long unstructured paragraph instead of scannable categories
- A References section with two people's personal phone numbers and email addresses — fine for a resume handed directly to one employer, not great for a PDF that's downloadable by literally anyone who visits my site

That last one was the one that actually stopped me. Once a resume lives behind a public download link, it's not really "sent privately" anymore. I pulled the reference contact info out of this version; the private copy I send directly for applications still has it.

## Rebuilding It

Instead of editing the old PDF, I rebuilt it as clean, single-column HTML and rendered it to PDF through headless Chrome (`--print-to-pdf`). That mattered for one specific reason: it keeps the text real and selectable rather than rasterizing it into an image, which is exactly what ATS parsers need to correctly extract your name, dates, and keywords.

A few structural decisions:

- **Categorized skills** instead of one paragraph — Languages, Frontend, Backend, Database & Tools, matching the same grouping my portfolio's Skills section already uses
- **No tables, columns, photos, or graphics** — the biggest thing that trips up ATS parsers is a multi-column layout, since the text-extraction order gets scrambled
- **Standard section headers** (Summary, Skills, Professional Experience) instead of anything cute

<figure class="post-diagram-figure">
<div class="post-diagram-scroll">
<svg viewBox="0 0 960 400" role="img" aria-label="A two-column resume is read line by line across both columns, so the parser mixes skills into job dates. A single-column resume is read top to bottom in the intended order.">
<defs>
<marker id="ats-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker>
</defs>
<text x="30" y="30" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">TWO COLUMNS</text>
<rect x="30" y="44" width="250" height="300" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<rect x="46" y="60" width="218" height="16" rx="3" fill="currentColor" fill-opacity="0.25"></rect>
<g fill="currentColor" fill-opacity="0.12">
<rect x="46" y="96" width="80" height="230" rx="4"></rect>
<rect x="138" y="96" width="126" height="230" rx="4"></rect>
</g>
<text x="86" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">SKILLS</text>
<text x="201" y="118" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">EXPERIENCE</text>
<g class="dg-warm" stroke="currentColor" stroke-width="1.4" fill="none">
<path d="M56 150 H 254" marker-end="url(#ats-arrow)"></path>
<path d="M56 190 H 254" marker-end="url(#ats-arrow)"></path>
<path d="M56 230 H 254" marker-end="url(#ats-arrow)"></path>
</g>
<text x="300" y="150" font-size="12" fill="currentColor" fill-opacity="0.8">The parser reads straight across:</text>
<g class="dg-warm" font-family="JetBrains Mono, monospace" font-size="11.5" fill="currentColor">
<text x="300" y="178">"Laravel  Datakraf Solution"</text>
<text x="300" y="200">"React  March 2025 – Present"</text>
<text x="300" y="222">"MySQL  Develop and maintain…"</text>
</g>
<text x="300" y="250" font-size="12" fill="currentColor" fill-opacity="0.8">✗ skills land inside job titles and dates</text>
<line x1="610" y1="20" x2="610" y2="380" stroke="currentColor" stroke-opacity="0.2" stroke-dasharray="4 5"></line>
<text x="650" y="30" font-size="11" fill="currentColor" fill-opacity="0.6" font-family="JetBrains Mono, monospace">ONE COLUMN</text>
<rect x="650" y="44" width="250" height="300" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.55"></rect>
<rect x="666" y="60" width="218" height="16" rx="3" fill="currentColor" fill-opacity="0.25"></rect>
<g font-size="11" font-weight="700" fill="currentColor">
<text x="676" y="112">1 · SUMMARY</text>
<text x="676" y="172">2 · SKILLS</text>
<text x="676" y="232">3 · EXPERIENCE</text>
<text x="676" y="302">4 · EDUCATION</text>
</g>
<g fill="currentColor" fill-opacity="0.12">
<rect x="676" y="120" width="200" height="22" rx="3"></rect>
<rect x="676" y="180" width="200" height="22" rx="3"></rect>
<rect x="676" y="240" width="200" height="40" rx="3"></rect>
<rect x="676" y="310" width="200" height="18" rx="3"></rect>
</g>
<g class="dg-accent" stroke="currentColor" stroke-width="1.6">
<line x1="920" y1="100" x2="920" y2="320" marker-end="url(#ats-arrow)"></line>
</g>
<g class="dg-accent">
<text x="775" y="372" text-anchor="middle" font-size="12" fill="currentColor">✓ read top to bottom, in order</text>
</g>
</svg>
</div>
<figcaption>Why columns are risky: many parsers read a PDF line by line across the whole page, not column by column.</figcaption>
</figure>


## Trimming for Signal

The first full draft technically worked, but it was 21 bullets across four roles and spilled onto two pages — either with everything cramped to fit one page, or with generous spacing and an awkwardly empty second page. I went back and forth on the CSS a few times and it kept looking worse each way.

The actual fix wasn't spacing, it was content. I merged overlapping bullets — nine for my current role became five, six for my previous IT role became four — and that gave the layout enough room to fit one page *without* squeezing line-height and margins down to nothing. Lesson noted: when a resume doesn't fit, the first thing to cut isn't whitespace, it's the redundant bullets.

<figure class="post-media post-media-narrow">
<img src="/blog/ats-friendly-resume/resume-page-1.jpg" alt="The rebuilt one-page resume: single column with Summary, Skills, Professional Experience, Leadership Experience and Education sections" loading="lazy" />
<figcaption>The rebuilt resume: one column, standard headers, categorised skills, one page. (This is the current version, updated since the post was written.)</figcaption>
</figure>


## Getting It Onto the Site

- The PDF lives at `/resume.pdf`
- A "Download Resume" button sits on both the homepage hero and the portfolio page's Quick Actions row
- The saved filename is set via HTML's `download` attribute, so it downloads as `Muhammad Yasin bin Abdul Hassim Oct 2026.pdf` instead of a generic `resume.pdf`, while the actual served URL stays simple

## Also Snuck In This Week

While in there, I also added Open Graph and Twitter Card meta tags site-wide, so links shared on WhatsApp or LinkedIn now render an actual preview card instead of a bare URL, plus a `CHANGELOG.md` that regenerates from git history so there's a real record of what's shipped on this site over time.

Most of this — the resume rebuild, the OG tags, the changelog tooling — was done working with Claude Sonnet 5, including the part where I had it iterate on PDF spacing about half a dozen times until it stopped looking cramped.

## Where It Stands

Resume's live, downloadable, and should parse cleanly through most ATS software now. Next up is probably doing something similar for my project cards, since right now they're icon-and-text-only with nothing showing the actual UI.
