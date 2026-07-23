import {createTikTokStyleCaptions} from "@remotion/captions";
import type {Caption, TikTokPage} from "@remotion/captions";
import {useCallback, useEffect, useMemo, useState} from "react";
import {
  Easing,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useDelayRender,
  useVideoConfig,
} from "remotion";
import {displayFont, theme} from "../DyslexiaBuddy/theme";

const SWITCH_CAPTIONS_EVERY_MS = 1200;
const SECTION_STARTS = new Set([0, 5000, 9333, 14000, 18667, 22500, 26333]);

const CaptionPage: React.FC<{page: TikTokPage}> = ({page}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const absoluteTimeMs = page.startMs + (frame / fps) * 1000;

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
        translate: `0 ${interpolate(frame, [0, 8], [24, 0], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}px`,
        opacity: interpolate(frame, [0, 8], [0, 1], {
          easing: Easing.bezier(0.16, 1, 0.3, 1),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <div
        style={{
          maxWidth: 900,
          textAlign: "center",
          whiteSpace: "pre",
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
        {page.tokens.map((token) => {
          const isActive =
            token.fromMs <= absoluteTimeMs && token.toMs > absoluteTimeMs;

          return (
            <span
              key={`${token.fromMs}-${token.toMs}`}
              style={{color: isActive ? theme.orangeSoft : theme.white}}
            >
              {token.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const TikTokCaptions: React.FC = () => {
  const {fps} = useVideoConfig();
  const [captions, setCaptions] = useState<Caption[] | null>(null);
  const {delayRender, continueRender, cancelRender} = useDelayRender();
  const [handle] = useState(() => delayRender("Loading release captions"));

  const loadCaptions = useCallback(async () => {
    try {
      const response = await fetch(staticFile("release/captions.json"));

      if (!response.ok) {
        throw new Error(`Could not load captions: ${response.status}`);
      }

      setCaptions((await response.json()) as Caption[]);
      continueRender(handle);
    } catch (error) {
      cancelRender(
        error instanceof Error ? error : new Error("Could not load captions"),
      );
    }
  }, [cancelRender, continueRender, handle]);

  useEffect(() => {
    loadCaptions();
  }, [loadCaptions]);

  const pages = useMemo(
    () => {
      if (!captions) {
        return [];
      }

      const sections = captions.reduce<Caption[][]>((groups, caption) => {
        if (groups.length === 0 || SECTION_STARTS.has(caption.startMs)) {
          groups.push([caption]);
        } else {
          groups[groups.length - 1].push(caption);
        }

        return groups;
      }, []);

      return sections.flatMap((section) =>
        createTikTokStyleCaptions({
          captions: section,
          combineTokensWithinMilliseconds: SWITCH_CAPTIONS_EVERY_MS,
        }).pages,
      );
    },
    [captions],
  );

  return (
    <>
      {pages.map((page, index) => {
        const nextPage = pages[index + 1] ?? null;
        const startFrame = Math.round((page.startMs / 1000) * fps);
        const finalToken = page.tokens[page.tokens.length - 1];
        const endMs = Math.min(
          nextPage?.startMs ?? finalToken?.toMs ?? page.startMs,
          page.startMs + SWITCH_CAPTIONS_EVERY_MS,
        );
        const durationInFrames = Math.max(
          1,
          Math.round(((endMs - page.startMs) / 1000) * fps),
        );

        return (
          <Sequence
            key={`${page.startMs}-${index}`}
            name={`Caption ${index + 1}`}
            from={startFrame}
            durationInFrames={durationInFrames}
          >
            <CaptionPage page={page} />
          </Sequence>
        );
      })}
    </>
  );
};
