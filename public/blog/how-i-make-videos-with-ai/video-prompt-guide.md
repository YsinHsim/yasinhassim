# Narrated video prompt guide

Copy-paste prompts for making a short narrated video with any AI assistant (ChatGPT, Claude, Gemini,
a local model) and any editor (CapCut, Premiere, DaVinci Resolve, or a code-based tool like HyperFrames
or Remotion). Replace the parts in `<angle brackets>`.

Use one conversation for the whole video so the assistant keeps the context, and paste back each
stage's result before moving on.

---

## 1. Brief

```
I want to make a <length> video for <platform> about <product / topic>.
Audience: <who>. After watching, they should remember: <one thing>.
It will autoplay <muted / with sound>. The real material I have: <app, footage, photos, data>.

Before planning anything, ask me whatever you need to know, then write the story in one sentence:
"<who> has <problem>; <thing> solves it by <steps>; the result is <outcome>."
```

## 2. Script as a scene table

```
Write the script as a table with columns: #, Time, Voiceover, Screen.

Rules:
- Follow one concrete example end to end (one customer / one order / one tenant), not a feature tour.
- Scene 1 states the problem in under 7 seconds. The last scene shows the result and a call to action.
- Every voiceover line says what happens AND why it matters.
- Write numbers as they should be spoken ("sixty percent", not "60%").
- About 2.5 words per second; keep the total under <N> words.

Then add "Truthfulness rules": what must be real, and what must never appear on screen.
```

## 3. Critique (don't skip)

```
Now critique this script as a skeptical viewer scrolling a feed. Answer each:
1. Is there a process (A leads to B leads to C), or just a list of features?
2. Which scenes don't answer "why should I care"?
3. Would the first 3 seconds stop someone scrolling? Suggest a stronger opening if not.
4. Could a viewer retell the story in one sentence afterwards?
5. With the sound off, do the captions alone tell the story?
6. Is any claim untrue or exaggerated?

List the problems, then give me a revised script.
```

## 4. Shot list for recording

```
For each scene, write a shot list I can record in one take:
- the starting page / state
- every click and typed value, in order
- where to pause so viewers can follow
- what must not be visible (passwords, real customer data, notifications)
Use only demo data.
```

If your assistant can write code, ask for an automated recorder instead:

```
Write a Puppeteer (or Playwright) script that records one clip per scene from this shot list.
Inject a visible cursor and a click ripple (headless browsers have none), move the mouse in steps,
pause after each action, record at 2x device scale factor, and name each clip after its scene.
```

## 5. Voiceover

```
Give me the voiceover lines only, one per scene, ready to paste into a text-to-speech tool.
Spell out numbers and abbreviations the way they should be spoken.
```

After generating the audio, note each line's length and paste them back:

```
These are the real durations of each line: <list>. Retime the scene table so every scene
is as long as its voiceover plus a short breath. Tell me the playback speed each recorded
clip needs to fit its scene.
```

## 6. Sound

```
Suggest a sound plan: a quiet music bed (mood, tempo), and short UI sounds for scene changes,
step changes and the end card. Give a volume for each, relative to the voice at 1.0.
```

With a coding assistant:

```
Write a Python script with numpy that synthesizes these as WAV files: a <length>-second music bed
at <BPM> BPM, a whoosh, a click and a chime. Use a fixed random seed so every run is identical.
```

## 7. Captions and on-screen text

```
Here is the word-level transcript of the final voiceover: <paste>.
Split it into caption chunks of at most 5 words, breaking at punctuation and pauses.
Correct any transcription mistakes against the script.
Also list the on-screen labels I need (step names, titles, end card text).
```

## 8. Review before publishing

```
Here are frames from the rendered video at these times: <attach screenshots>.
Check each against the script: cut-off text, captions covering the action, wrong labels,
anything from the "never on screen" list, typos in captions.
```

```
Write the post copy for <platform> around the same one-sentence story.
Hook in the first line, under <N> characters, with a link to <url>.
```
