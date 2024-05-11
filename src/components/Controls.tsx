import { PlayingState } from '../lib/speech';

export const Controls = ({
  play,
  pause,
  loadNewContent,
}: {
  play: () => void;
  pause: () => void;
  loadNewContent: () => void;
  state: PlayingState;
}) => {
  return <div></div>;
};
