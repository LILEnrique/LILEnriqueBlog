import React from "react";
import { getPostMetadata } from "../../components/getPostMetadata";
import sortByDate from "@/components/utils/SortByDate";
import PostPreview from "@/components/PostPreview";
import PaddingContainer from "@/components/PaddingContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artículos",
  description: "...",
};

export default function Articles() {
  const postMetadata = getPostMetadata();
  const sortedPostMetadata = sortByDate(postMetadata);
  const postPreviews = sortedPostMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <PaddingContainer>
      <div className=" border-b border-black border-opacity-5 pb-2 pt-12 dark:prose-invert dark:border-white dark:border-opacity-5 md:space-y-5">
        <h1 className="text-xl font-extrabold leading-8 tracking-tight sm:text-2xl sm:leading-10 ">
          Todos los artículos
        </h1>
      </div>
      <main className="mt-8 space-y-4">{postPreviews}</main>
    </PaddingContainer>
  );
}
