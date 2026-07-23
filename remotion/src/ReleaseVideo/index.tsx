import {Audio} from "@remotion/media";
import {AbsoluteFill, Sequence, staticFile} from "remotion";
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
  {name: "Hook", from: 0, duration: 150, component: HookScene},
  {name: "Customize reading", from: 150, duration: 130, component: ScanScene},
  {name: "Listen and follow", from: 280, duration: 140, component: ReaderScene},
  {name: "Tutor support", from: 420, duration: 140, component: TutorScene},
  {name: "Word review", from: 560, duration: 115, component: ReviewScene},
  {name: "Personalize", from: 675, duration: 115, component: PersonalizeScene},
  {name: "Closing", from: 790, duration: 110, component: EndScene},
] as const;

export const PhaseOneTwoRelease: React.FC = () => {
  return (
    <AbsoluteFill style={{background: theme.ink}}>
      <Audio src={staticFile("release/voiceover.wav")} volume={0.95} />
      {scenes.map(({name, from, duration, component: Component}) => (
        <Sequence
          key={from}
          name={name}
          from={from}
          durationInFrames={duration}
          premountFor={30}
        >
          <Component />
        </Sequence>
      ))}
      <TikTokCaptions />
    </AbsoluteFill>
  );
};
