import {AbsoluteFill, Audio, Sequence, staticFile} from "remotion";
import {theme} from "../DyslexiaBuddy/theme";
import {TikTokCaptions} from "./TikTokCaptions";
import {
  EndScene,
  HookScene,
  PersonalizeScene,
  ReaderScene,
  ReviewScene,
  ScanScene,
  TutorScene,
} from "./scenes";

const scenes = [
  {from: 0, duration: 150, component: HookScene},
  {from: 150, duration: 130, component: ScanScene},
  {from: 280, duration: 140, component: ReaderScene},
  {from: 420, duration: 140, component: TutorScene},
  {from: 560, duration: 115, component: ReviewScene},
  {from: 675, duration: 115, component: PersonalizeScene},
  {from: 790, duration: 110, component: EndScene},
] as const;

export const PhaseOneTwoRelease: React.FC = () => {
  return (
    <AbsoluteFill style={{background: theme.ink}}>
      <Audio src={staticFile("release/voiceover.wav")} volume={0.95} />
      {scenes.map(({from, duration, component: Component}) => (
        <Sequence key={from} from={from} durationInFrames={duration} premountFor={30}>
          <Component />
        </Sequence>
      ))}
      <TikTokCaptions />
    </AbsoluteFill>
  );
};
