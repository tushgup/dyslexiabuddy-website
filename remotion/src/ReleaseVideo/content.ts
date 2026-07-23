export const releaseContent = {
  label: "PHASE 1 + 2",
  hook: ["Reading shouldn't", "stop here."],
  scan: {
    title: "Turn any page into your reading space.",
    eyebrow: "SCAN",
  },
  reader: {
    title: "See it. Hear it. Stay with it.",
    passage: ["The curious fox waited", "beside the garden wall", "while morning light", "moved across the page."],
  },
  tutor: {
    title: "Help, right where you need it.",
    selection: "moved across the page",
    answer: "The sunlight slowly traveled over the page.",
  },
  review: {
    title: "Practice what slowed you down.",
    word: "approachable",
    definition: "easy to understand or begin",
  },
  personalize: {
    title: "Make every page yours.",
    features: ["Reading themes", "Natural voices", "Search + progress"],
  },
  end: {
    title: "Read. Pause. Ask. Continue.",
    subtitle: "The new DyslexiaBuddy",
    cta: "Available on the App Store",
  },
};

export type CaptionPage = {
  from: number;
  to: number;
  text: string;
};

export const captionPages: CaptionPage[] = [
  {from: 0, to: 48, text: "When a page feels hard,"},
  {from: 48, to: 114, text: "help shouldn’t mean losing your place."},
  {from: 150, to: 205, text: "Scan it into DyslexiaBuddy."},
  {from: 280, to: 369, text: "Follow each word as a natural voice reads aloud."},
  {from: 369, to: 414, text: "Tap anywhere to begin."},
  {from: 420, to: 452, text: "Select what’s confusing."},
  {from: 452, to: 560, text: "Ask the tutor to define, simplify, or explain."},
  {from: 560, to: 626, text: "Save difficult words for focused review."},
  {from: 675, to: 733, text: "Choose the look and voice that feel right."},
  {from: 790, to: 875, text: "Read, pause, ask, and continue."},
];

export const voiceover =
  "When a page feels hard, getting help shouldn't mean losing your place. Scan it into DyslexiaBuddy. Follow each sentence and word as natural voices read aloud. Tap anywhere to begin. Select what's confusing, and ask the tutor to define, simplify, or explain it. Save difficult words for smart review. Choose the look and voice that feel right. Read, pause, ask, and continue with the new DyslexiaBuddy.";
