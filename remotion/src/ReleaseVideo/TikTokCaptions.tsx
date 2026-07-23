import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {captionPages} from "./content";
import {displayFont, theme} from "../DyslexiaBuddy/theme";

export const TikTokCaptions: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const page = captionPages.find((item) => frame >= item.from && frame < item.to);

  if (!page) {
    return null;
  }

  const words = page.text.split(" ");
  const pageFrame = frame - page.from;
  const pageDuration = page.to - page.from;
  const activeWord = Math.min(
    words.length - 1,
    Math.floor(interpolate(pageFrame, [0, pageDuration], [0, words.length])),
  );
  const enter = spring({frame: pageFrame, fps, durationInFrames: 8, config: {damping: 18}});

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 50,
        left: 70,
        right: 70,
        bottom: 82,
        display: "flex",
        justifyContent: "center",
        transform: `translateY(${interpolate(enter, [0, 1], [24, 0])}px)`,
        opacity: enter,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          textAlign: "center",
          fontFamily: displayFont,
          fontSize: 42,
          fontWeight: 720,
          lineHeight: 1.18,
          letterSpacing: "-0.022em",
          color: theme.white,
          background: "rgba(40,26,18,.94)",
          border: "1px solid rgba(255,255,255,.14)",
          borderRadius: 24,
          padding: "20px 28px 22px",
          boxShadow: "0 18px 48px rgba(40,26,18,.22)",
        }}
      >
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            style={{color: index === activeWord ? theme.orangeSoft : theme.white}}
          >
            {word}{index === words.length - 1 ? "" : " "}
          </span>
        ))}
      </div>
    </div>
  );
};
