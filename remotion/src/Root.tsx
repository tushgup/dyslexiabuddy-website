import {Composition} from "remotion";
import {DyslexiaBuddyIntro} from "./DyslexiaBuddy";
import {PhaseOneTwoRelease} from "./ReleaseVideo";
import "./index.css";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PhaseOneTwoRelease"
        component={PhaseOneTwoRelease}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="DyslexiaBuddyIntro"
        component={DyslexiaBuddyIntro}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
