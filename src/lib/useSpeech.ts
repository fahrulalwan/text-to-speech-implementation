import { useState } from 'react';

import { PlayingState } from './speech';

const useSpeech = (sentences: Array<string>) => {
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState(0);
  const [currentWordRange, setCurrentWordRange] = useState([0, 0]);

  const [playbackState, setPlaybackState] = useState<PlayingState>("paused");

  const play = () => {};
  const pause = () => {};

  return {
    currentSentenceIdx,
    currentWordRange,
    playbackState,
    play,
    pause,
  };
};

export { useSpeech };
