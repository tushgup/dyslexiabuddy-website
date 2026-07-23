import {
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {displayFont, readingFont, theme} from "../DyslexiaBuddy/theme";
import {releaseContent} from "./content";
import {Phone, ReleaseLabel, Scene, SceneTitle} from "./components";

export const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, durationInFrames: 24, config: {damping: 16}});
  const focus = interpolate(frame, [35, 115], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
  return (
    <Scene duration={150} background={theme.ink} dark>
      <ReleaseLabel dark />
      <div style={{marginTop: 90, transform: `translateY(${(1 - enter) * 70}px)`, opacity: enter}}>
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
          transform: `scale(${interpolate(enter, [0, 1], [0.94, 1])})`,
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
  const enter = interpolate(frame, [0, 24], [0.96, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Scene duration={130} background="#EFEFFE">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.scan.title}</SceneTitle>
      <Phone
        video="release/customize.mp4"
        style={{transform: `scale(${enter})`}}
      />
    </Scene>
  );
};

export const ReaderScene: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 140], [20, -20], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Scene duration={140}>
      <ReleaseLabel />
      <SceneTitle>{releaseContent.reader.title}</SceneTitle>
      <Phone
        video="release/listen.mp4"
        trimBefore={180}
        style={{transform: `translateY(${drift}px)`}}
      />
    </Scene>
  );
};

export const TutorScene: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = spring({frame, fps: 30, durationInFrames: 26, config: {damping: 18}});
  return (
    <Scene duration={140} background="#FFE8DD">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.tutor.title}</SceneTitle>
      <Phone
        video="release/tutor.mp4"
        trimBefore={90}
        style={{
          opacity: enter,
          transform: `translateY(${(1 - enter) * 54}px) scale(${0.96 + enter * 0.04})`,
        }}
      />
    </Scene>
  );
};

export const ReviewScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const flip = spring({frame, fps, durationInFrames: 24, config: {damping: 16}});
  return (
    <Scene duration={115} background="#E8F8F0">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.review.title}</SceneTitle>
      <Phone
        video="release/review.mp4"
        trimBefore={90}
        style={{
          transform: `perspective(1200px) rotateY(${interpolate(flip, [0, 1], [-8, 0])}deg) scale(${interpolate(flip, [0, 1], [0.96, 1])})`,
        }}
      />
    </Scene>
  );
};

export const PersonalizeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = interpolate(frame, [0, 115], [-16, 16], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <Scene duration={115} background="#EDF5FF">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.personalize.title}</SceneTitle>
      <Phone
        video="release/customize.mp4"
        trimBefore={270}
        style={{transform: `translateY(${drift}px)`}}
      />
    </Scene>
  );
};

export const EndScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, durationInFrames: 24, config: {damping: 14}});
  return (
    <Scene duration={110} background={theme.ink} dark>
      <div style={{height: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: 80}}>
        <Img
          src={staticFile("release/icon.png")}
          style={{width: 230, height: 230, borderRadius: 52, boxShadow: "0 30px 80px rgba(242,115,26,.28)", transform: `scale(${enter})`}}
        />
        <h2 style={{fontFamily: displayFont, fontSize: 92, lineHeight: .98, letterSpacing: "-.055em", margin: "70px 0 28px", maxWidth: 900}}>{releaseContent.end.title}</h2>
        <div style={{fontSize: 38, color: "#F3E4D2"}}>{releaseContent.end.subtitle}</div>
        <div style={{marginTop: 76, background: theme.orange, color: theme.white, borderRadius: 24, padding: "22px 34px", fontSize: 28, fontWeight: 850}}>{releaseContent.end.cta}</div>
      </div>
    </Scene>
  );
};
