import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostBackground from "@/components/PostBackground";
import React, { useEffect } from "react";

import Highlight from "@/components/mdx/Highlight";
import CustomUl from "@/components/mdx/CustomUl";
import CustomLi from "@/components/mdx/CustomLi";
import CustomP from "@/components/mdx/CustomP";
import CustomH1 from "@/components/mdx/CustomH1";
import CustomImage from "@/components/mdx/CustomImage";
import { getReadingTime } from "@/lib/getReadingTime";

const components = {
  h1: CustomH1,
  p: CustomP,
  ul: CustomUl,
  li: CustomLi,
  CustomImage,
  Highlight,
};

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.subtitle,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const postInfo = await getPostData(postId);

  return (
    <>
      <header>
        <PostBackground postInfo={postInfo}></PostBackground>
      </header>
      <main className="main">
        <div className="main-div">
          <MDXRemote
            source={postInfo.content}
            components={components}
          ></MDXRemote>
          <Link href="/">← Back to home</Link>
        </div>
      </main>
    </>
  );
}
