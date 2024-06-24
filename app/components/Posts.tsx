"use client";

import Post from "./Post";
import { useState, useEffect, MouseEvent } from "react";

interface BlogListProps {
  posts: BlogPost[];
}

const Posts: React.FC<BlogListProps> = ({ posts }) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    console.log(filteredPosts);
  }, [search]);

  useEffect(() => {
    console.log(posts);
    let tags: string[] = [];
    posts.map((post) => {
      tags = tags.concat(post.tags);
    });
    const uniqueTags = Array.from(new Set(tags));
    console.log("tags:", uniqueTags);

    setTags(uniqueTags);
  }, []);

  const filteredPosts = posts.filter((post) => {
    const titleMatches = post.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const tagMatches =
      selectedTags.length === 0 ||
      post.tags.some((tag) => selectedTags.includes(tag));

    return titleMatches && tagMatches;
  });

  const tagClickHandler = (tag: string) => {
    console.log(tag);

    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((e) => e !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <section>
      <div className="posts-search">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h3>Filter with tag</h3>
        <ul>
          {tags.map((tag) => {
            return (
              <li key={tag} onClick={() => tagClickHandler(tag)}>
                <div
                  className={`posts__hashtag ${
                    selectedTags.includes(tag) ? "active" : ""
                  }`}
                >
                  <span>{tag}</span>
                  <span>0</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        {filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          filteredPosts.map((post) => {
            if (!post.isPublished) {
              return;
            }
            return <Post key={post.id} post={post} />;
          })
        )}
      </div>
    </section>
  );
};

export default Posts;
