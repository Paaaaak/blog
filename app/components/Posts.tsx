'use client'

import Post from "./Post";
import { useState, useEffect } from "react";

interface BlogListProps {
  posts: BlogPost[];
}

const Posts: React.FC<BlogListProps> = ({ posts }) => {

  useEffect(() => {
    console.log('posts:', posts);
  }, []);

  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(filteredPosts);
  }, [search])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div>
      {filteredPosts.map((post) => {
          if (!post.isPublished) {
            return;
          }
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </section>
  );
}

export default Posts;