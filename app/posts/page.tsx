import { getSortedPostsData } from "@/lib/posts";
import React from "react";
import Posts from "../components/Posts";

const page = () => {
  const posts = getSortedPostsData();

  return (
    <main className="main">
      <Posts posts={posts}></Posts>
    </main>
  );
};

export default page;