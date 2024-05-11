import {useEffect, useState} from 'react';

import {createSpeechEngine, PlayingState, SpeechEngine} from './speech';

const useSpeech = (sentences: Array<string>) => {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState<number>(0);
  const [currentWordRange, setCurrentWordRange] = useState<[number, number]>([0, 0]);

  const [playbackState, setPlaybackState] = useState<PlayingState>("paused");

  const [speechEngine, setSpeechEngine] = useState<SpeechEngine | null>(null);

  useEffect(() => {
    if (sentences.length > 0) {
      const engine = createSpeechEngine({
        onBoundary: (e) => {
          setCurrentWordRange([e.charIndex, e.charIndex + e.charLength]);
        },
        onEnd: () => {
          setCurrentSentenceIdx((idx) => idx + 1);
        },
        onStateUpdate: (state) => {
          setPlaybackState(state);
        },
      });
      setSpeechEngine(engine);
    }
  }, [sentences]);

  const play = () => {
    if (speechEngine && sentences[currentSentenceIdx]) {
      speechEngine.load(sentences[currentSentenceIdx]);
      speechEngine.play();
    }
  };

  const pause = () => {
    if (speechEngine) {
      speechEngine.pause();
    }
  };

  return {
    currentSentenceIdx,
    currentWordRange,
    playbackState,
    play,
    pause,
  };
};

export { useSpeech };
