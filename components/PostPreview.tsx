import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import FormattedDate from "./utils/DateFormatter";
import Image from "next/image";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="xl:col-span-3">
      <Link href={`/posts/${props.slug}`} prefetch>
        <h2 className=" text-lg font-medium tracking-tight hover:text-primaryLight dark:hover:text-primaryDark  ">
          {props.title}
        </h2>
      </Link>
      <div className="flex flex-wrap items-center gap-1 text-xs text-zinc-500  dark:text-zinc-400 ">
        <div className="capitalize text-primaryLight dark:text-primaryDark">
          {props.category}
        </div>
        <div className="h-1 w-1 rounded-full bg-zinc-500" />
        <div>
          <FormattedDate date={props.date} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
