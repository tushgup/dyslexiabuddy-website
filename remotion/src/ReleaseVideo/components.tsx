import type {ReactNode} from "react";
import {Video} from "@remotion/media";
import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {displayFont, theme} from "../DyslexiaBuddy/theme";

export const sceneVisibility = (frame: number, duration: number) =>
  interpolate(frame, [0, 12, duration - 12, duration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });

export const Scene: React.FC<{
  children: ReactNode;
  duration: number;
  background?: string;
  dark?: boolean;
  accent?: string;
}> = ({children, duration, background = theme.cream, dark = false, accent = theme.orange}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        padding: "92px 70px 290px",
        background,
        color: dark ? theme.white : theme.ink,
        fontFamily: displayFont,
        opacity: sceneVisibility(frame, duration),
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          right: -290,
          top: -290,
          border: `2px solid ${dark ? "rgba(255,255,255,.08)" : `${accent}30`}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          right: -116,
          top: -118,
          background: dark ? "rgba(242,115,26,.13)" : `${accent}16`,
        }}
      />
      {children}
    </div>
  );
};

export const ReleaseLabel: React.FC<{dark?: boolean}> = ({dark = false}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      height: 54,
    }}
  >
    <Img
      src={staticFile("release/icon.png")}
      style={{width: 52, height: 52, borderRadius: 13, boxShadow: "0 8px 20px rgba(90,50,12,.16)"}}
    />
    <div style={{display: "flex", alignItems: "baseline", gap: 13}}>
      <span style={{fontSize: 26, fontWeight: 800, letterSpacing: "-.025em"}}>
        DyslexiaBuddy
      </span>
      <span
        style={{
          color: dark ? "rgba(255,255,255,.68)" : theme.inkSoft,
          fontSize: 20,
          fontWeight: 650,
        }}
      >
        What&apos;s new
      </span>
    </div>
  </div>
);

export const SceneTitle: React.FC<{children: ReactNode; size?: number}> = ({children, size = 78}) => (
  <Interactive.H2
    name="Scene title"
    style={{
      fontSize: size,
      fontWeight: 780,
      lineHeight: 1.02,
      letterSpacing: "-0.04em",
      margin: "42px 0 42px",
      maxWidth: 930,
    }}
  >
    {children}
  </Interactive.H2>
);

export const ProductVideo: React.FC<{
  source: string;
  trimBeforeInSeconds?: number;
  style?: React.CSSProperties;
}> = ({source, trimBeforeInSeconds = 0, style}) => {
  const {fps} = useVideoConfig();

  return (
    <Interactive.Div
      name="Product recording"
      style={{
        width: 560,
        aspectRatio: "540 / 1174",
        margin: "0 auto",
        border: `2px solid ${theme.border}`,
        borderRadius: 44,
        overflow: "hidden",
        background: theme.white,
        boxShadow: "0 42px 96px rgba(70,40,20,.18), 0 10px 28px rgba(70,40,20,.10)",
        position: "relative",
        ...style,
      }}
    >
      <Video
        src={staticFile(source)}
        muted
        trimBefore={trimBeforeInSeconds * fps}
        objectFit="contain"
        style={{
          display: "block",
          width: "100%",
          aspectRatio: "540 / 1174",
        }}
      />
    </Interactive.Div>
  );
};
