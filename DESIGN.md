---
name: DyslexiaBuddy Website
description: A warm App Store landing site for an on-device dyslexia reading coach.
colors:
  brand-50: "#FFF3EA"
  brand-100: "#FFE3CD"
  brand-200: "#FFC79B"
  brand-300: "#FFA868"
  brand-400: "#FB8B3C"
  brand-500: "#F2731A"
  brand-600: "#E15B0C"
  brand-700: "#B9470C"
  brand-800: "#8F3407"
  cream-50: "#FFFBF6"
  cream-100: "#FFF4E9"
  cream-200: "#F3E4D2"
  ink: "#2A1E14"
  ink-700: "#4F4034"
  ink-500: "#8A7563"
  peach: "#F4E2C6"
  salmon: "#FFD9CC"
  periwinkle: "#C9C7FF"
  sky: "#BFE0FF"
  butter: "#FBF1A8"
  mint: "#BFF0DA"
  white: "#FFFFFF"
  black: "#000000"
  device-shell: "#111111"
  device-black: "#0A0A0B"
  device-graphite: "#2C2C2E"
  device-camera: "#1C1C1E"
  dark-surface: "#211710"
  highlight-yellow: "#FEF9C3"
  highlight-blue: "#E0F2FE"
  highlight-green: "#F0FDF4"
  highlight-warm: "#FFF7ED"
  progress-gold: "#FFB055"
  warm-hairline: "rgba(90,50,12,.06)"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.028em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  reading:
    fontFamily: "Atkinson Hyperlegible, Verdana, sans-serif"
    fontWeight: 400
    lineHeight: 1.8
  dyslexia-demo:
    fontFamily: "Comic Sans MS, Chalkboard SE, Lexend, sans-serif"
    fontWeight: 400
    lineHeight: 2
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontWeight: 700
rounded:
  xs: "5px"
  focus: "6px"
  sm: "10px"
  icon: "14px"
  md: "16px"
  point: "18px"
  bubble: "20px"
  phone-inner-mobile: "21px"
  lg: "24px"
  phone-screen: "27px"
  phone-mobile: "28px"
  xl: "32px"
  phone-frame: "36px"
  phone-screen-large: "42px"
  device-large: "54px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.brand-700}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  card-modern:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System: DyslexiaBuddy Website

## 1. Overview

**Creative North Star: "The Calm Reading Desk"**

DyslexiaBuddy should feel like a clean, warm desk where a reader can put down a difficult page and finally have help that makes sense. The system is approachable and tactile, but not childish. It uses real app imagery, soft reading surfaces, and confident App Store polish to make the product feel both caring and capable.

This is a brand surface, so the design should communicate trust quickly. It should avoid generic AI startup visuals, heavy abstraction, and dense educational brochure layouts. The strongest pages show the app doing the work: scanning, reading aloud, highlighting the current sentence and word, and sending selected text to the tutor.

**Key Characteristics:**
- Warm orange brand accent paired with cream surfaces and dark ink.
- Real app screenshots as proof, not decoration.
- Large readable type, plain language, and controlled line lengths.
- Rounded, tactile controls that feel native to iOS without becoming glassy for its own sake.
- Motion that clarifies hierarchy and respects reduced-motion users.

## 2. Colors

The palette is warm and reader-friendly: orange carries action and brand identity, cream carries calm, and dark brown ink keeps contrast grounded.

### Primary
- **Buddy Orange** (#F2731A): Primary action color for CTAs, active demo states, reading progress, and focused accents.
- **Deep Buddy Orange** (#E15B0C): Hover and emphasis state for primary controls.
- **Soft Orange Wash** (#FFF3EA, #FFE3CD, #FFC79B): Background tints, icon wells, and gentle highlights.
- **Progress Gold** (#FFB055): Secondary endpoint for the reading progress gradient.

### Secondary
- **Reading Pastels** (#F4E2C6, #FFD9CC, #C9C7FF, #BFE0FF, #FBF1A8, #BFF0DA): App-derived support colors for reading themes, controls, and illustrative product moments. Use these sparingly and with enough ink contrast.
- **Demo Theme Swatches** (#FEF9C3, #E0F2FE, #F0FDF4, #FFF7ED): Inline reader-background choices shown in the customization demo.

### Neutral
- **Warm Page** (#FFFBF6): Main body background.
- **Warm Band** (#FFF4E9): Section bands and soft app-adjacent surfaces.
- **Warm Border** (#F3E4D2): Dividers, card borders, and low-contrast structure.
- **Reading Ink** (#2A1E14): Primary text and dark surfaces.
- **Soft Ink** (#4F4034, #8A7563): Secondary and metadata text.
- **Tutor Dark Surface** (#211710): Dark spotlight sections for AI tutor and featured pricing.
- **Device Black Stack** (#000000, #0A0A0B, #111111, #1C1C1E, #2C2C2E): iPhone/iPad mockup frames and camera hardware only.
- **White** (#FFFFFF): Card, button, bubble, and high-contrast content surfaces.
- **Warm Hairline** (`rgba(90,50,12,.06)`): Nearly invisible framing stroke for screenshot gallery edges.

### Named Rules

**The Orange Has a Job Rule.** Use orange for actions, active reading state, and important product moments. Do not spread it across every heading or icon.

**The Cream Must Stay Legible Rule.** Cream surfaces are allowed only when text stays comfortably above WCAG AA contrast.

## 3. Typography

**Display Font:** Apple system display stack with SF Pro Display preference.
**Body Font:** Apple system text stack with SF Pro Text preference.
**Reading Font:** Atkinson Hyperlegible with Verdana fallback.
**Dyslexia Demo Font:** Comic Sans MS with Chalkboard SE and Lexend fallback, used only as a browser-safe dyslexia-mode demonstration.

**Character:** The type system is practical and iOS-native. Display headings are confident and compact; reading samples switch into a more dyslexia-friendly text face so the site demonstrates the product promise.

### Hierarchy

- **Display** (700, fluid large sizes, 1.04 line-height): Hero and major section headings only.
- **Headline** (700, 24-42px, tight line-height): Feature titles, pricing headings, and FAQ title.
- **Title** (700-800, 18-24px): Card and point titles.
- **Body** (400, 16-20px, 1.55-1.7 line-height): Marketing copy. Keep line length around 65-75ch.
- **Reading** (400, 16-24px, 1.8+ line-height): Demo text, product reading examples, and any educational passages.
- **Label** (700, 11-14px): Short labels only. Avoid repeating tiny uppercase tracked labels above every section by reflex.

### Named Rules

**The Reader Comes First Rule.** If a typographic choice makes text harder to scan, it loses, even if it looks premium.

## 4. Elevation

The system uses soft ambient shadows and warm borders. Surfaces should feel lightly lifted from the page, never like heavy SaaS cards stacked in space. Dark sections can use glow only when it supports the AI tutor or product focus.

### Shadow Vocabulary

- **Soft Shadow** (`0 2px 8px -2px rgba(90, 50, 12, .10)`): Nav icons, small surfaces, and resting controls.
- **Warm Shadow** (`0 12px 30px -10px rgba(90, 50, 12, .18)`): Hovered cards and medium surfaces.
- **Lift Shadow** (`0 30px 60px -22px rgba(90, 50, 12, .28)`): Device mockups and hero app imagery.
- **Brand Shadow** (`0 16px 36px -12px rgba(225, 91, 12, .45)`): Primary CTA buttons only.

### Named Rules

**The Surface Has to Earn It Rule.** Cards frame repeated items, tools, screenshots, and pricing. Do not wrap every section in a card.

## 5. Components

### Buttons

- **Shape:** Rounded rectangles with a 16px radius.
- **Primary:** Buddy Orange background, white text, medium padding, and brand shadow.
- **Hover / Focus:** Slight upward transform, deeper orange, visible focus ring.
- **Ghost:** White or translucent white background, warm border, dark ink text, soft shadow.

### Chips

- **Style:** Small inline rounded elements with subtle border or orange fill when selected.
- **State:** Selected states should be obvious through color and weight, not color alone when possible.

### Cards / Containers

- **Corner Style:** 24px radius for primary cards, 16-18px for small utility surfaces.
- **Background:** White on cream, or dark ink for the tutor spotlight.
- **Shadow Strategy:** Soft at rest, warm on hover.
- **Border:** Warm cream border for structure.
- **Internal Padding:** 24-32px for cards, tighter for controls.

### Inputs / Fields

- **Style:** White or warm-page background, rounded 16px, warm border.
- **Focus:** Orange outline or ring.
- **Error / Disabled:** Use clear text and border treatment. Do not rely only on color.

### Navigation

Sticky top navigation with app icon, wordmark, essential links, and one download CTA. Desktop nav stays quiet and scan-friendly. Mobile menu should be simple, readable, and large enough for touch.

### Signature Component

The **Latest App Experience** showcase pairs concise feature points with overlapping real screenshots. Use this pattern for app capability updates when the iOS product changes: concrete feature, short reader benefit, real screenshot proof.

## 6. Do's and Don'ts

### Do:

- **Do** show real app screenshots, especially reader and tutor screens.
- **Do** write in concrete product verbs: scan, listen, define, simplify, quiz, summarize, resume.
- **Do** keep body copy short and readable, with generous line height and strong contrast.
- **Do** use Atkinson Hyperlegible for reading samples and dyslexia-relevant text surfaces.
- **Do** preserve the app's warm orange and cream identity when adding new pages.
- **Do** respect reduced motion and make content visible without JavaScript.

### Don't:

- **Don't** use generic AI startup visuals such as purple gradients, abstract orbs, fake metrics, or vague "unlock potential" language.
- **Don't** make dyslexia feel clinical, childish, remedial, or shame-based.
- **Don't** use glassmorphism as decoration. Liquid/glass effects should only appear when they clearly echo real app UI.
- **Don't** repeat tiny uppercase tracked section labels as the default structure on every new section.
- **Don't** add dense educational brochure copy without a clear reader benefit.
- **Don't** use low-contrast gray text on cream backgrounds.
