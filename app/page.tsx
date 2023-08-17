import React from "react";
import { getPostMetadata } from "../components/getPostMetadata";
import PostCard from "@/components/PostCard";
import sortByDate from "@/components/utils/SortByDate";
import PaddingContainer from "@/components/PaddingContainer";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Home() {
  const postMetadata = getPostMetadata();

  const sortedPostMetadata = sortByDate(postMetadata);

  // Filtro los últimos 3 artículos distintos al artículo actual
  const recentPosts = sortedPostMetadata.slice(1, 4); // Obtiene los 2 primeros artículos después de filtrar

  return (
    <div className="">
      <PaddingContainer>
        <div className="mb-20 flex w-full flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
          <span className="borderBW mb-4 rounded-lg px-4 py-1 text-sm text-zinc-500 dark:text-zinc-400 ">
            Hola, mi nombre es Enrique
          </span>
          <h1 className="font-display mx-auto max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl">
            Bienvenido a mi blog
          </h1>

          <p className="mx-auto my-4 max-w-xl text-lg leading-7 ">
            Aquí es donde comparto mi pasión por la fotografía, la programación
            y el diseño.
          </p>
          <div className="text-md flex max-w-lg flex-col items-center justify-start  gap-2  sm:flex-row">
            <Link
              className="group flex w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-zinc-800  px-4  py-2  text-zinc-100   outline-none transition duration-150 ease-in-out hover:scale-105  hover:bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100 "
              href="https://lilenrique.github.io/"
              target="_blank"
            >
              Acerca de mí
              <span>
                <BsArrowUpRight className=" text-sm transition-all group-hover:-translate-y-1 group-hover:translate-x-1 " />
              </span>
            </Link>
            <div className="flex gap-2 sm:flex-row">
              <a
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-zinc-800 p-3 text-zinc-100 outline-none transition hover:scale-105 hover:bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100"
                href="https://www.linkedin.com/in/enriquefcc/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-zinc-800 p-3 text-zinc-100 outline-none transition hover:scale-105 hover:bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100 "
                href="https://github.com/LILEnrique"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold leading-8 tracking-tight sm:text-2xl sm:leading-10 ">
            Últimos artículos
          </h1>
        </div>
        <section className="mt-8 space-y-8">
          <PostCard
            isPostHero
            reverse
            direction="horizontal"
            post={sortedPostMetadata[0]}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {recentPosts.map((post) => (
              <PostCard direction="vertical" key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </PaddingContainer>
    </div>
  );
}
