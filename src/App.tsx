import './App.css';

import { Controls } from './components/Controls';
import { CurrentlyReading } from './components/CurrentlyReading';
import {useCallback, useEffect, useState} from "react";
import {fetchContent, parseContentIntoSentences} from "./lib/content";
import {useSpeech} from "./lib/useSpeech";

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  const {
    currentSentenceIdx,
    currentWordRange,
    playbackState,
    play,
    pause,
  } = useSpeech(sentences);

  const fetchContents = useCallback(async () => {
    const content = await fetchContent();
    const sentences = parseContentIntoSentences(content);
    setSentences(sentences);
  }, [])

  useEffect(() => {
    void fetchContents()
  }, [fetchContents]);

  return (
    <div className="App">
      <h1>Text to speech</h1>
      <div>
        <CurrentlyReading
          currentWordRange={currentWordRange}
          currentSentenceIdx={currentSentenceIdx}
          sentences={sentences}
        />
      </div>
      <div>
        <Controls
          state={playbackState}
          play={play}
          pause={pause}
          loadNewContent={fetchContents}
        />
      </div>
    </div>
  );
}

export default App;
