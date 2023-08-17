import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { PostMetadata } from "./PostMetadata";
import FormattedDate from "./utils/DateFormatter";
import getReadingTime from "./utils/GetReadingTime";
import getPostContent from "./utils/GetPostContent";

interface PostCardProps {
  post: PostMetadata;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  isPostHero?: boolean;
}

const PostCard = (
  {
    post,
    direction = "horizontal",
    reverse = false,
    isPostHero = false,
  }: PostCardProps
) => {
  const { title, date, category, subtitle, image, slug } = post;
  const { content } = getPostContent(slug); // Obtain the content of the post
  const readingTime = getReadingTime(content);

  return (
    <Link
      href={`/posts/${post.slug}`}
      prefetch
      className={` ${
        direction === "horizontal"
          ? "grid grid-cols-1 items-center gap-10 md:grid-cols-2 "
          : " space-y-4 "
      }`}
    >
      <>
        <Image
          className={`aspect-video h-auto max-h-[300px] w-full rounded-xl object-cover object-center ${
            reverse ? " md:order-last " : ""
          }}`}
          width={600}
          height={400}
          alt={post.title}
          src={image}
        />

        <div>
          <div className=" xl:col-row-3 space-y-2">
            <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="borderBW rounded-lg px-1.5 py-1 capitalize text-primaryLight dark:text-primaryDark">
                {category}
              </div>
              <div className="borderBW rounded-lg px-1.5 py-1">
                {FormattedDate({ date })}
              </div>
              <div className="borderBW rounded-lg px-1.5 py-1">
                {readingTime}
              </div>
            </div>

            <h2
              className={`leading-8 tracking-tight  ${
                isPostHero
                  ? "text-lg font-bold sm:text-xl"
                  : "text-md font-semibold sm:text-lg "
              }`}
            >
              {title}
            </h2>
            <p className="leading-normal text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </p>
            <p
              className={` group mt-4 flex items-center gap-2  hover:text-primaryLight dark:hover:text-primaryDark  ${
                isPostHero ? "text-lg" : "text-md "
              }`}
            >
              Leer más{" "}
              <span>
                <BsArrowUpRight className=" text-sm transition-all group-hover:-translate-y-1 group-hover:translate-x-1 " />
              </span>
            </p>
          </div>
        </div>
      </>
    </Link>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    //   <div className="flex-1 p-8 sm:p-10 bg-white bg-transparency-box-3 rounded-lg shadow-card overflow-hidden flex flex-col">
    //     <div className="flex-grow">
    //       <img src="https://tiptap.dev/images/editor/use-case-ai-copywriting.jpg"  className="mb-10 rounded-lg shadow-cardImages" />
    //       <h3>AI copywriting</h3>
    //       <p className="text-md">AI rules the world, and so does Tiptap, with out-of-the-box AI features that let you build powerful editor apps.</p>
    //     </div>
    //     <div className="mt-auto pt-8">
    //       <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>Editor</strong>
    //       </div>
    //       <strong className="text-xs">+</strong> <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>AI</strong>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex-1 p-8 sm:p-10 bg-white bg-transparency-box-3 rounded-lg shadow-card overflow-hidden flex flex-col">
    //     <div className="flex-grow">
    //       <img src="https://tiptap.dev/images/editor/use-case-notion-like-experience.jpg"  className="mb-10 rounded-lg shadow-cardImages" />
    //       <h3>Notion like experience</h3>
    //       <p className="text-md">This is what Tiptap is known for. It raises the bar for block-based interfaces to an unbeatable level.</p>
    //     </div>
    //     <div className="mt-auto pt-8">
    //       <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>Editor</strong>
    //       </div>
    //       <strong className="text-xs">+</strong> <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>Collaboration</strong>&nbsp;(opt)
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex-1 p-8 sm:p-10 bg-white bg-transparency-box-3 rounded-lg shadow-card overflow-hidden flex flex-col">
    //     <div className="flex-grow">
    //       <img src="https://tiptap.dev/images/editor/use-case-chatting.jpg" alt className="mb-10 rounded-lg shadow-cardImages" />
    //       <h3>Chatting</h3>
    //       <p className="text-md">Build everything from slick support chats to complex messaging interfaces in a snap with Tiptap.</p>
    //     </div>
    //     <div className="mt-auto pt-8">
    //       <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>Editor</strong>
    //       </div>
    //       <strong className="text-xs">+</strong> <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>Collaboration</strong>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex-1 p-8 sm:p-10 bg-white bg-transparency-box-3 rounded-lg shadow-card overflow-hidden flex flex-col">
    //     <div className="flex-grow">
    //       <img src="https://tiptap.dev/images/editor/use-case-content-site-building.jpg" alt className="mb-10 rounded-lg shadow-cardImages" />
    //       <h3>Content site building</h3>
    //       <p className="text-md">Tiptap allows you to create extensive website builders with an incredible editor experience.</p>
    //     </div>
    //     <div className="mt-auto pt-8">
    //       <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>Editor</strong>
    //       </div>
    //       <strong className="text-xs">+</strong> <div className="inline-flex rounded border border-solid border-gray-100 px-1.5 py-1 text-xs">
    //         <strong>Collaboration</strong>&nbsp;(opt)
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostCard;
