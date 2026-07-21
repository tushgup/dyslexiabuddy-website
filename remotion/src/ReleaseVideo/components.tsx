import type {ReactNode} from "react";
import {Easing, Img, interpolate, staticFile, useCurrentFrame} from "remotion";
import {displayFont, theme} from "../DyslexiaBuddy/theme";

export const sceneVisibility = (frame: number, duration: number) =>
  interpolate(frame, [0, 12, duration - 12, duration], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

export const Scene: React.FC<{
  children: ReactNode;
  duration: number;
  background?: string;
  dark?: boolean;
}> = ({children, duration, background = theme.cream, dark = false}) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        padding: "118px 70px 360px",
        background,
        color: dark ? theme.white : theme.ink,
        fontFamily: displayFont,
        opacity: sceneVisibility(frame, duration),
      }}
    >
      {children}
    </div>
  );
};

export const ReleaseLabel: React.FC<{dark?: boolean}> = ({dark = false}) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      border: `2px solid ${dark ? "rgba(255,255,255,.28)" : theme.border}`,
      borderRadius: 999,
      background: dark ? "rgba(255,255,255,.1)" : theme.white,
      padding: "12px 20px",
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: "0.08em",
      color: dark ? theme.white : theme.ink,
    }}
  >
    <span style={{width: 12, height: 12, borderRadius: 999, background: theme.orange}} />
    PHASE 1 + 2
  </div>
);

export const SceneTitle: React.FC<{children: ReactNode; size?: number}> = ({children, size = 72}) => (
  <h2
    style={{
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "-0.048em",
      margin: "28px 0 42px",
      maxWidth: 930,
    }}
  >
    {children}
  </h2>
);

export const Phone: React.FC<{children?: ReactNode; image?: string; style?: React.CSSProperties}> = ({
  children,
  image,
  style,
}) => (
  <div
    style={{
      width: 700,
      height: 920,
      margin: "0 auto",
      border: "18px solid #161311",
      borderRadius: 62,
      overflow: "hidden",
      background: theme.white,
      boxShadow: "0 36px 80px rgba(90,50,12,.24)",
      position: "relative",
      ...style,
    }}
  >
    <div
      style={{
        position: "absolute",
        zIndex: 3,
        top: 13,
        left: "50%",
        width: 132,
        height: 34,
        transform: "translateX(-50%)",
        borderRadius: 999,
        background: "#161311",
      }}
    />
    {image ? (
      <Img src={staticFile(image)} style={{width: "100%", height: "100%", objectFit: "cover"}} />
    ) : (
      children
    )}
  </div>
);
