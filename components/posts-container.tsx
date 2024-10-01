import Post from "./post";
import { useState, useEffect, MouseEvent } from "react";
import Posts from "./posts";
import { getSortedPostsData } from "@/lib/posts";

const PostsContainer = async () => {
  const posts = await getSortedPostsData();

  return (
    <>
      <Posts posts={posts}></Posts>
    </>
  );
};

export default PostsContainer;
