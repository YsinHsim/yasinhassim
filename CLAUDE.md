# Project notes for Claude Code

## Commit SOP

Commit each meaningful change as its own commit as you go, rather than batching many changes into one. This keeps history granular so any single change can be reverted or undone independently if something breaks during development.

## Changelog SOP

This repo tracks changes in `CHANGELOG.md`, generated from git history (not shown on the live site — it's for internal tracking only).

- After committing changes worth logging, run `npm run changelog` to regenerate `CHANGELOG.md` from `git log`.
- Then commit the updated `CHANGELOG.md` alongside (or right after) the change it documents.
- The generator lives at `scripts/generate-changelog.mjs` — it groups commits by date and lists the subject + short hash. No manual editing needed; just re-run it, don't hand-edit `CHANGELOG.md`.
