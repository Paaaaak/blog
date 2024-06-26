import { getSortedPostsData } from "@/lib/posts";
import React from "react";
import Posts from "../components/Posts";
import Background from "../components/Background";

const page = () => {
  const posts = getSortedPostsData();

  return (
    <main className="main">
      <Background></Background>
      <div className="main-div">
        <Posts posts={posts}></Posts>
      </div>
    </main>
  );
};

export default page;
