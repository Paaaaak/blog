import readingTime from "reading-time";

export const getReadingTime = (content: string): string => {
  return readingTime(content).text;
}