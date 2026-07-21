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
  const scanY = interpolate(frame, [28, 120], [210, 790], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
  return (
    <Scene duration={130} background="#EFEFFE">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.scan.title}</SceneTitle>
      <Phone image="release/scan.jpg" style={{height: 970}} />
      <div
        style={{
          position: "absolute",
          top: scanY,
          left: 166,
          right: 166,
          height: 5,
          background: theme.orange,
          boxShadow: `0 0 26px ${theme.orange}`,
          borderRadius: 999,
        }}
      />
    </Scene>
  );
};

export const ReaderScene: React.FC = () => {
  const frame = useCurrentFrame();
  const wordIndex = Math.min(10, Math.floor(interpolate(frame, [22, 130], [0, 11], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})));
  const words = releaseContent.reader.passage.join(" ").split(" ");
  return (
    <Scene duration={140}>
      <ReleaseLabel />
      <SceneTitle>{releaseContent.reader.title}</SceneTitle>
      <Phone>
        <div style={{padding: "88px 46px 46px", height: "100%", background: "#FFF4E9"}}>
          <div style={{fontSize: 22, fontWeight: 750, color: theme.inkSoft}}>CHAPTER TWO · 42%</div>
          <div style={{marginTop: 60, fontFamily: readingFont, fontSize: 44, lineHeight: 1.75}}>
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                style={{
                  display: "inline",
                  background: index === wordIndex ? theme.orange : index >= wordIndex - 4 && index < wordIndex ? theme.butter : "transparent",
                  color: index === wordIndex ? theme.white : theme.ink,
                  borderRadius: 7,
                  padding: index === wordIndex ? "2px 5px" : 0,
                }}
              >
                {word}{" "}
              </span>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              left: 30,
              right: 30,
              bottom: 32,
              borderRadius: 28,
              padding: "24px 30px",
              background: theme.ink,
              color: theme.white,
              display: "flex",
              alignItems: "center",
              gap: 24,
              fontSize: 25,
              fontWeight: 750,
            }}
          >
            <span style={{fontSize: 34}}>▶</span>
            <span style={{flex: 1}}>Reading aloud</span>
            <span>2:18 left</span>
          </div>
        </div>
      </Phone>
    </Scene>
  );
};

export const TutorScene: React.FC = () => {
  const frame = useCurrentFrame();
  const response = interpolate(frame, [48, 90], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});
  return (
    <Scene duration={140} background="#FFE8DD">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.tutor.title}</SceneTitle>
      <Phone>
        <div style={{padding: "88px 34px 38px", height: "100%", background: "#FFF9F4", fontSize: 28}}>
          <div style={{fontSize: 24, color: theme.inkSoft, marginBottom: 36}}>Selected from your document</div>
          <div style={{background: theme.butter, padding: "24px 26px", borderRadius: 22, fontFamily: readingFont, lineHeight: 1.45}}>
            “{releaseContent.tutor.selection}”
          </div>
          <div style={{display: "flex", gap: 12, margin: "22px 0 44px"}}>
            {["Define", "Simplify", "Explain"].map((action, index) => (
              <div key={action} style={{background: index === 1 ? theme.orange : theme.white, color: index === 1 ? theme.white : theme.ink, border: `2px solid ${theme.border}`, borderRadius: 999, padding: "14px 18px", fontWeight: 800}}>{action}</div>
            ))}
          </div>
          <div style={{opacity: response, transform: `translateY(${(1 - response) * 28}px)`, background: theme.white, borderRadius: 26, padding: "28px", boxShadow: "0 16px 45px rgba(90,50,12,.1)"}}>
            <div style={{color: theme.orangeDeep, fontWeight: 850, marginBottom: 14}}>In simpler words</div>
            <div style={{fontFamily: readingFont, fontSize: 33, lineHeight: 1.5}}>{releaseContent.tutor.answer}</div>
          </div>
          <div style={{position: "absolute", left: 34, right: 34, bottom: 34, color: theme.inkSoft, fontSize: 23}}>Answers stay grounded in what you're reading.</div>
        </div>
      </Phone>
    </Scene>
  );
};

export const ReviewScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const flip = spring({frame: frame - 35, fps, config: {damping: 16}});
  return (
    <Scene duration={115} background="#E8F8F0">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.review.title}</SceneTitle>
      <div style={{display: "flex", justifyContent: "center", marginTop: 86}}>
        <div
          style={{
            width: 820,
            height: 590,
            borderRadius: 48,
            background: theme.white,
            border: `3px solid ${theme.border}`,
            boxShadow: "0 36px 80px rgba(36,91,67,.16)",
            padding: "64px",
            textAlign: "center",
            transform: `perspective(900px) rotateY(${interpolate(flip, [0, 1], [-12, 0])}deg) scale(${interpolate(flip, [0, 1], [.94, 1])})`,
          }}
        >
          <div style={{fontSize: 25, fontWeight: 850, color: theme.orangeDeep, letterSpacing: ".08em"}}>READY TO REVIEW</div>
          <div style={{fontFamily: readingFont, fontSize: 76, fontWeight: 700, marginTop: 90}}>{releaseContent.review.word}</div>
          <div style={{fontFamily: readingFont, fontSize: 34, color: theme.inkSoft, marginTop: 24}}>{releaseContent.review.definition}</div>
          <div style={{display: "flex", justifyContent: "center", gap: 18, marginTop: 74}}>
            {["Again", "Got it"].map((text, index) => <div key={text} style={{borderRadius: 20, padding: "18px 42px", fontSize: 28, fontWeight: 800, background: index ? theme.orange : theme.creamStrong, color: index ? theme.white : theme.ink}}>{text}</div>)}
          </div>
        </div>
      </div>
    </Scene>
  );
};

export const PersonalizeScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene duration={115} background="#EDF5FF">
      <ReleaseLabel />
      <SceneTitle>{releaseContent.personalize.title}</SceneTitle>
      <div style={{display: "flex", gap: 24, justifyContent: "center", marginTop: 32}}>
        {["release/voice.jpg", "release/appearance.jpg"].map((src, index) => (
          <div
            key={src}
            style={{
              width: 420,
              height: 690,
              overflow: "hidden",
              borderRadius: 38,
              border: "12px solid #171411",
              background: theme.white,
              boxShadow: "0 26px 60px rgba(40,65,100,.2)",
              transform: `translateY(${interpolate(frame, [0, 80], [index ? 48 : 0, index ? 0 : 48], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}px)`,
            }}
          >
            <Img src={staticFile(src)} style={{width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
        ))}
      </div>
      <div style={{display: "flex", justifyContent: "center", gap: 12, marginTop: 32}}>
        {releaseContent.personalize.features.map((feature) => <div key={feature} style={{padding: "14px 18px", background: theme.white, borderRadius: 999, fontSize: 22, fontWeight: 800}}>{feature}</div>)}
      </div>
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

