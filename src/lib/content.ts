const API_URL = "http://localhost:5174/content";

const fetchContent = async (url = API_URL): Promise<string> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.error('There was an error fetching the content', error);
    return "<speak><s>There was an error</s></speak>";
  }
};

const parseContentIntoSentences = (content: string): string[] => {
  const sentencePattern = /<s>(.*?)<\/s>/g;
  const matches = content.match(sentencePattern);
  if (!matches) {
    return [];
  }
  return matches.map(sentence => sentence.replace(/<\/?s>/g, ''));
};
export { fetchContent, parseContentIntoSentences };
