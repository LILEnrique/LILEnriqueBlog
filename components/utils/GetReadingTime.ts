import readingTime from "reading-time";

const getReadingTime = (text: string) => {
  const readingTimeResult = readingTime(text);

  const minutes = readingTimeResult.minutes;
  const formattedTime = `${Math.ceil(minutes)} min de lectura`;

  return formattedTime;
};

export default getReadingTime;
