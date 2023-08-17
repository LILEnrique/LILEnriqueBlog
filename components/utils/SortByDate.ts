import { PostMetadata } from "../PostMetadata";

const sortByDate = (array: PostMetadata[]): PostMetadata[] => {
  return array.slice().sort((a, b) => {
    const dateA = new Date(
      parseInt(a.date.split("-")[2]),
      parseInt(a.date.split("-")[1]) - 1,
      parseInt(a.date.split("-")[0])
    );
    const dateB = new Date(
      parseInt(b.date.split("-")[2]),
      parseInt(b.date.split("-")[1]) - 1,
      parseInt(b.date.split("-")[0])
    );

    return dateB.getTime() - dateA.getTime();
  });
};

export default sortByDate;
