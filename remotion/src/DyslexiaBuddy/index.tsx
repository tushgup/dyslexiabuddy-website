import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {introContent} from "./content";
import {displayFont, readingFont, theme} from "./theme";

const fadeUp = (frame: number, start: number) => {
  const progress = interpolate(frame, [start, start + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return {
    opacity: progress,
    translate: `0 ${interpolate(progress, [0, 1], [44, 0])}px`,
  };
};

export const DyslexiaBuddyIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const wordProgress = interpolate(frame, [100, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: theme.cream,
        color: theme.ink,
        fontFamily: displayFont,
        padding: "150px 84px 110px",
      }}
    >
      <div style={{...fadeUp(frame, 8), color: theme.orangeDeep, fontSize: 34, fontWeight: 750}}>
        {introContent.eyebrow}
      </div>

      <h1
        style={{
          ...fadeUp(frame, 18),
          fontSize: 102,
          letterSpacing: "-0.055em",
          lineHeight: 0.98,
          margin: "34px 0 76px",
          maxWidth: 900,
        }}
      >
        {introContent.headline}
      </h1>

      <div
        style={{
          background: theme.white,
          border: `3px solid ${theme.border}`,
          borderRadius: 44,
          boxShadow: "0 34px 80px rgba(90, 50, 12, 0.16)",
          padding: "70px 64px",
          scale: interpolate(frame, [54, 82], [0.92, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          transformOrigin: "center",
        }}
      >
        <div style={{color: theme.inkSoft, fontSize: 28, fontWeight: 700, marginBottom: 28}}>
          READING VIEW
        </div>
        <p style={{fontFamily: readingFont, fontSize: 52, lineHeight: 1.65, margin: 0}}>
          {introContent.passageBefore}{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${theme.butter} ${wordProgress * 100}%, transparent ${wordProgress * 100}%)`,
              borderRadius: 8,
              padding: "2px 6px",
            }}
          >
            {introContent.highlightedWord}
          </span>{" "}
          {introContent.passageAfter}
        </p>
      </div>

      <div style={{display: "flex", gap: 18, marginTop: 48}}>
        {introContent.actions.map((action, index) => (
          <div
            key={action}
            style={{
              ...fadeUp(frame, 116 + index * 9),
              background: [theme.sky, theme.mint, theme.creamStrong][index],
              borderRadius: 999,
              fontSize: 31,
              fontWeight: 750,
              padding: "20px 30px",
            }}
          >
            {action}
          </div>
        ))}
      </div>

      <div
        style={{
          ...fadeUp(frame, 174),
          borderTop: `2px solid ${theme.border}`,
          fontSize: 38,
          fontWeight: 650,
          lineHeight: 1.25,
          marginTop: "auto",
          paddingTop: 42,
        }}
      >
        {introContent.closing}
      </div>
    </AbsoluteFill>
  );
};
