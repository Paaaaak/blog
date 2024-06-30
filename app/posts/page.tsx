import { getSortedPostsData } from "@/lib/posts";
import React from "react";
import Posts from "../components/Posts";
import Background from "../components/Background";

export const metadata = {
  title: "Jaehyeon's Blog asdasd",
  description: "Created by Dave Gray",
  keywords: "nextjs, seo, metadata",
};

const page = () => {
  const posts = getSortedPostsData();

  return (
    <main className="main">
      <Background pageType="posts"></Background>
      <div className="main-div">
        <Posts posts={posts}></Posts>
      </div>
    </main>
  );
};

export default page;
