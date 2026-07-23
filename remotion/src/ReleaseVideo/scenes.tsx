import {
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {displayFont, readingFont, theme} from "../DyslexiaBuddy/theme";
import {releaseContent} from "./content";
import {ProductVideo, ReleaseLabel, Scene, SceneTitle} from "./components";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const focus = interpolate(frame, [35, 115], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
  return (
    <Scene duration={150} background={theme.ink} dark>
      <ReleaseLabel dark />
      <div
        style={{
          marginTop: 90,
          translate: `0 ${interpolate(frame, [0, 24], [70, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
          opacity: interpolate(frame, [0, 20], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {releaseContent.hook.map((line, index) => (
          <div
            key={line}
            style={{
              fontSize: 112,
              fontWeight: 850,
              lineHeight: 0.97,
              letterSpacing: "-0.06em",
              color: index === 1 ? theme.orange : theme.white,
            }}
          >
            {line}
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 90,
          borderRadius: 36,
          padding: "52px 46px",
          background: theme.white,
          color: theme.ink,
          fontFamily: readingFont,
          fontSize: 50,
          lineHeight: 1.65,
          scale: interpolate(frame, [0, 24], [0.94, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        The unfamiliar word made the paragraph feel{" "}
        <span style={{background: `rgba(242,115,26,${0.15 + focus * 0.55})`, borderRadius: 8, padding: "2px 7px"}}>
          inaccessible.
        </span>
      </div>
    </Scene>
  );
};

export const ScanScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene duration={130} background="#EFEFFE">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.scan.title}</SceneTitle>
      <ProductVideo
        source="release/customize.mp4"
        style={{
          scale: interpolate(frame, [0, 24], [0.96, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </Scene>
  );
};

export const ReaderScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene duration={140}>
      <ReleaseLabel />
      <SceneTitle>{releaseContent.reader.title}</SceneTitle>
      <ProductVideo
        source="release/listen.mp4"
        trimBeforeInSeconds={6}
        style={{
          translate: `0 ${interpolate(frame, [0, 140], [20, -20], {
            easing: Easing.bezier(0.45, 0, 0.55, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
        }}
      />
    </Scene>
  );
};

export const TutorScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene duration={140} background="#FFE8DD">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.tutor.title}</SceneTitle>
      <ProductVideo
        source="release/tutor.mp4"
        trimBeforeInSeconds={3}
        style={{
          opacity: interpolate(frame, [0, 26], [0, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: `0 ${interpolate(frame, [0, 26], [54, 0], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
          scale: interpolate(frame, [0, 26], [0.96, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </Scene>
  );
};

export const ReviewScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene duration={115} background="#E8F8F0">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.review.title}</SceneTitle>
      <ProductVideo
        source="release/review.mp4"
        trimBeforeInSeconds={3}
        style={{
          rotate: interpolate(frame, [0, 24], ["-2deg", "0deg"], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 24], [0.96, 1], {
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </Scene>
  );
};

export const PersonalizeScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene duration={115} background="#EDF5FF">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.personalize.title}</SceneTitle>
      <ProductVideo
        source="release/customize.mp4"
        trimBeforeInSeconds={9}
        style={{
          translate: `0 ${interpolate(frame, [0, 115], [-16, 16], {
            easing: Easing.bezier(0.45, 0, 0.55, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
        }}
      />
    </Scene>
  );
};

export const EndScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene duration={110} background={theme.ink} dark>
      <div style={{height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 80}}>
        <Img
          src={staticFile("release/icon.png")}
          style={{
            width: 230,
            height: 230,
            borderRadius: 52,
            boxShadow: "0 30px 80px rgba(242,115,26,.28)",
            scale: interpolate(frame, [0, 24], [0.86, 1], {
              easing: Easing.bezier(0.34, 1.56, 0.64, 1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
        <h2 style={{fontFamily: displayFont, fontSize: 92, lineHeight: .98, letterSpacing: "-.055em", margin: "70px 0 28px", maxWidth: 900}}>{releaseContent.end.title}</h2>
        <div style={{fontSize: 38, color: "#F3E4D2"}}>{releaseContent.end.subtitle}</div>
        <div style={{marginTop: 76, background: theme.orange, color: theme.white, borderRadius: 24, padding: "22px 34px", fontSize: 28, fontWeight: 850}}>{releaseContent.end.cta}</div>
      </div>
    </Scene>
  );
};
