# DyslexiaBuddy Social Video Kit

This is an isolated Remotion workspace for DyslexiaBuddy social videos. Its structure follows the Activity Wrapped landing-page setup: compositions live under a product folder, editable copy is separate from animation code, and rendered output stays out of Git.

## Start Studio

From the repository root:

```bash
cd remotion
npm install
npm run dev
```

Choose `PhaseOneTwoRelease` in the Remotion Studio sidebar. It is the 30-second Phase 1 + 2 launch story, built in the vertical TikTok-template style with animated word captions. `DyslexiaBuddyIntro` remains available as the original starter.

## Edit the starter

- `src/DyslexiaBuddy/content.ts` contains the video copy.
- `src/DyslexiaBuddy/theme.ts` mirrors the core tokens in the website's `DESIGN.md`.
- `src/DyslexiaBuddy/index.tsx` contains the composition and motion.
- `src/ReleaseVideo/content.ts` contains all Phase 1 + 2 release copy and the voiceover script.
- `src/ReleaseVideo/scenes.tsx` contains the seven release-video scenes.
- `src/ReleaseVideo/TikTokCaptions.tsx` contains the word-highlight caption treatment.
- `public/release/voiceover.wav` is a temporary system-voice narration track. Replace it with the final recorded read without changing the composition code.
- `src/Root.tsx` registers compositions and defines their dimensions and timing.
- Put media used by future compositions in `public/` and load it with Remotion's `staticFile()` helper.

## Render

```bash
cd remotion
npm run render
npm run still
```

Outputs are written to `remotion/out/`, which is intentionally ignored by Git.

## Visual direction

Keep the website's calm-reading-desk direction: warm cream surfaces, dark reading ink, orange reserved for action, readable type, one idea per scene, and real product imagery where possible. Avoid dense copy and unnecessary motion.
