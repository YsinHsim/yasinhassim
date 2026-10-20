---
name: narrated-video-workflow
description: Plan and build a short narrated video (product walkthrough, explainer, story) with an AI coding agent - brief, scene-table script, critique, scripted screen recording, TTS voiceover, synthesized sound, code-generated composition, checks and render. Use when the user wants to make a video, a product demo, a walkthrough, a showcase or an explainer, especially one that should tell a story rather than show a montage of features.
---

# Narrated video workflow

A video that only shows screens or facts with captions and music reads as bland. Viewers remember a
story: a problem, the steps that solve it, and the result, told by a voice that explains why each
step matters. This skill keeps that story in front of every other decision.

Work through the stages in order. Each stage ends with a file, and the next stage reads that file,
so the whole video can be rebuilt or retimed from its sources.

Never skip the critique (stage 3). Building is the expensive part; a weak script found before the
build costs one message, found after the render it costs the whole video.

## 0. Brief

Ask, or confirm from context, before writing anything:

- Platform and format: LinkedIn / YouTube 16:9 (1920x1080), TikTok / Reels / Shorts 9:16 (1080x1920).
- Length: 30-60 s for social feeds, up to about 2 min for a walkthrough.
- Audience and the one thing they should remember.
- Sound: will it autoplay muted (feed) or be watched with sound (YouTube)? Muted autoplay needs captions that carry the story on their own.
- What real material exists: a running app, footage, photos, data. A story about a real place or product needs real footage of it; motion graphics alone feel empty.

Write a one-sentence story: "<who> has <problem>; <thing> solves it by <steps>; the result is <outcome>."
If you can't, the video isn't ready to plan.

## 1. Script as a scene table

Write `script.md` with one row per scene:

| # | Time | Voiceover | Screen |
|---|---|---|---|

Rules:

- Follow one concrete example end to end (one customer, one order, one tenant), not a tour of every feature.
- Scene 1 is the problem in under 7 seconds. The last scene is the result plus a call to action.
- Each voiceover line says what happens and why it matters. "Rent lives on the lease, not the room, so two identical rooms can have different rents" beats "Create leases easily".
- Write numbers the way they should be spoken ("sixty percent", "room two"). Speech engines and caption transcribers both trip over "Room 2 40%".
- About 2.5 spoken words per second. A 90-second video holds about 220 words.

Add a "Truthfulness rules" section for anything shown from a real system:

- Every on-screen action is real; nothing is faked in post.
- Only seeded demo data and demo accounts appear. Back up the database before recording and restore it afterwards.
- List what must never be on screen: login pages showing passwords, API keys, real customer data, notifications.

## 2. Critique before building

Review the script as a skeptical viewer and write the findings down. Check:

- Is there a process (A leads to B leads to C), or is it a list of features?
- Does every scene answer "why should I care"?
- Would the first 3 seconds stop someone scrolling?
- Could a viewer retell the story afterwards in one sentence?
- With the sound off, do the captions alone still tell it?
- Is every claim true for the real product today?

Revise the script, then get the user's approval before stage 3.

## 3. Record real footage, scripted

Record screen footage with a browser automation script (Puppeteer or Playwright), not by hand:

- One clip per scene, named after the scene (`b3-lease.webm`), so a single scene can be re-recorded.
- Headless browsers have no cursor: inject a visible cursor and a click ripple into every page.
- Move the mouse in steps and pause after each action so viewers can follow.
- Record at 2x device scale factor so zoomed-in frames stay sharp.
- Keep the recorder in the project (`record/record.mjs`) with usage in its header comment.

## 4. Voiceover

- Generate one audio file per voiceover line with a TTS engine (for example Kokoro-82M, which runs locally). Keep the lines in the generator script so a wording change is a one-line edit and a rerun.
- Print each line's duration. Scene timing follows the voice, never the other way round.
- Join the lines into one track and record each line's start time.
- Transcribe the final track to word-level timestamps for captions, then correct transcription slips against the script (numbers and product names are the usual ones).

## 5. Sound

- Synthesize a quiet music bed and UI sounds (whoosh for scene changes, click for steps, chime for the end card) with code, seeded so every run gives identical files. No licensing questions, and every sound fits the video's tempo.
- Keep effects well under the voice: start around 0.15-0.25 volume and lower the bed while someone speaks.

## 6. Build the composition from config

Generate the video composition (HTML for HyperFrames, React for Remotion, or a timeline for any editor
that accepts one) from a build script with a config list at the top:

```
SCENES = [
  # (start s, duration s, clip, clip start s, playback rate, step, label)
  (19.4, 12.9, "b3-lease", 0.0, 1.35, 2, "Lease"),
]
```

- Retiming a scene means editing numbers and rerunning the build, never hand-editing output.
- Fit each clip to its voice line with the playback rate (0.9-1.6x reads naturally).
- Give viewers a map: a step progress bar or chapter label that lights up as each step starts.
- A slow push-in (scale 1.00 to 1.06) on screen recordings keeps static UI alive.
- Captions: chunks of at most 5 words, split at punctuation and pauses, placed where they don't cover the action.
- Keep earlier versions (`build_v1.py`, `build_v2.py`) so you can compare and roll back.

## 7. Check

- Run the framework's validator or linter.
- Snapshot frames at the key moments of every scene and look at them: text cut off, captions over the action, wrong step highlighted, anything from the "never on screen" list.
- Read every caption against the script.
- Rebuild before the final render, and confirm the render was made from the latest build. A stale build is the easiest way to ship errors you already fixed.
- After rendering, check the rendered file itself, not just the composition: grab frames from the MP4 at every caption you corrected and every number on screen, and compare them with the script. Check the thumbnail too; it is usually cut from the same render.
- Published platforms rarely let you replace a video file in place (YouTube doesn't), so a caption mistake found after upload means a new upload with a new link. Catching it here is much cheaper.

## 8. Render and publish

- Render the final file (MP4, H.264, AAC). Also export a thumbnail from a strong frame.
- Write the post copy around the same one-sentence story.
- Keep all sources: script, recorder, generators, build script, config. The video should be reproducible from them.
