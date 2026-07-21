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
        left: 64,
        right: 64,
        bottom: 150,
        display: "flex",
        justifyContent: "center",
        transform: `translateY(${interpolate(enter, [0, 1], [34, 0])}px) scale(${interpolate(enter, [0, 1], [0.94, 1])})`,
        opacity: enter,
      }}
    >
      <div
        style={{
          maxWidth: 940,
          textAlign: "center",
          fontFamily: displayFont,
          fontSize: 68,
          fontWeight: 900,
          lineHeight: 1.03,
          letterSpacing: "-0.035em",
          color: theme.white,
          WebkitTextStroke: "14px #1A120C",
          paintOrder: "stroke",
          textTransform: "uppercase",
        }}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} style={{color: index === activeWord ? theme.orange : theme.white}}>
            {word}{index === words.length - 1 ? "" : " "}
          </span>
        ))}
      </div>
    </div>
  );
};

