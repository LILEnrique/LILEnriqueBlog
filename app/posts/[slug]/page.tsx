import Markdown from "markdown-to-jsx";
import {
  getPostMetadata,
  getPostData,
} from "../../../components/getPostMetadata";
import FormattedDate from "@/components/utils/DateFormatter";
import getReadingTime from "@/components/utils/GetReadingTime";
import PostCard from "@/components/PostCard";
import getPostContent from "@/components/utils/GetPostContent";
import sortByDate from "@/components/utils/SortByDate";

export async function generateMetadata(
  {
    params,
  }: {
    params: {
      slug: string;
    };
  }
) {
  try {
    const post = await getPostData(params.slug);
    if (!post)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: post.title,
      description: post.subtitle,
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const postMetadata = getPostMetadata();
  const sortedPostMetadata = sortByDate(postMetadata);

  // Filtra los últimos 3 artículos distintos al artículo actual
  const recentPosts = sortedPostMetadata
    .filter((p) => p.slug !== slug) // Excluye el artículo actual
    .slice(0, 2); // Obtiene los 2 primeros artículos después de filtrar

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pt-12 sm:px-0">
      <div className="my-12 flex flex-col space-y-2 text-center">
        <div className="mx-auto flex flex-wrap items-center gap-1 text-xs font-medium uppercase tracking-normal text-primaryLight dark:text-primaryDark sm:text-sm  ">
          <div>{post.data.category}</div>
          <div className="h-1 w-1 rounded-full bg-zinc-500 dark:bg-zinc-400 " />
          <div>
            <FormattedDate date={post.data.date} />
          </div>
          <div className="h-1 w-1 rounded-full bg-zinc-500 dark:bg-zinc-400" />
          <div>{getReadingTime(post.content)}</div>
        </div>
        <h1 className="text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl sm:leading-10">
          {post.data.title}
        </h1>
      </div>
      <article className="prose max-w-3xl border-y border-black border-opacity-5 dark:prose-invert dark:border-white dark:border-opacity-5  ">
        <Markdown>{post.content}</Markdown>
      </article>
      <section className="mt-10 gap-4 sm:gap-8">
        <h2 className="text-xl font-extrabold leading-8 tracking-tight sm:text-2xl sm:leading-10 ">
          Más artículos
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col">
          {recentPosts.map((post) => (
            <PostCard direction="vertical" key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostPage;
