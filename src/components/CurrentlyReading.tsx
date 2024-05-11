export const CurrentlyReading = ({
  currentWordRange,
  currentSentenceIdx,
  sentences,
}: {
  currentWordRange: [number, number];
  currentSentenceIdx: number;
  sentences: string[];
}) => {
  const currentSentence = sentences[currentSentenceIdx];

  if (!currentSentence) {
    return null; // or return a default component or a loading state
  }

  console.log('currentWordRange', currentWordRange)

  const currentWord = currentSentence.slice(currentWordRange[0], currentWordRange[1]);

  return (
    <div data-testid="currently-reading">
      <p data-testid="current-sentence">
        {currentSentence.slice(0, currentWordRange[0])}
        <span data-testid="current-word" style={{color: 'red'}}>{currentWord}</span>
        {currentSentence.slice(currentWordRange[1])}
      </p>

      <p style={{marginTop: 10}}>{sentences}</p>
    </div>
  )
};
