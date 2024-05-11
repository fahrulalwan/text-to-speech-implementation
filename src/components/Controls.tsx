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
  return (
    <div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={loadNewContent}>Fetch New Content</button>
    </div>
  );
};
