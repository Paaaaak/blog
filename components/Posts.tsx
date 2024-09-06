"use client";

import Post from "./post";
import { useState, useEffect, MouseEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface BlogListProps {
  posts: BlogPost[];
}

const Posts: React.FC<BlogListProps> = ({ posts }) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState<Map<string, number>>(
    new Map<string, number>()
  );

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const tagsMap = new Map<string, number>();

    let tags: string[] = [];
    posts.map((post) => {
      tags = tags.concat(post.tags);
    });

    tags.forEach((tag) => {
      if (tagsMap.has(tag)) {
        tagsMap.set(tag, tagsMap.get(tag)! + 1);
      } else {
        tagsMap.set(tag, 1);
      }
    });

    setTags(tagsMap);
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
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((e) => e !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <section>
      <div className="posts-search">
        <div className="card">
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="input__label">Search By Title</span>
          </label>
          <SearchIcon></SearchIcon>
        </div>

        <h2>Filter with tag</h2>
        <ul>
          {[...tags.entries()].map(([tag, count]) => (
            <li key={tag} onClick={() => tagClickHandler(tag)}>
              <div
                className={`posts__hashtag ${
                  selectedTags.includes(tag) ? "active" : ""
                }`}
              >
                <span>{tag}</span>
                <span>{count}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h2
        style={{
          paddingLeft: "25px",
          margin: "30px 0",
          color: "rgb(170, 170, 170)",
        }}
      >
        {filteredPosts.length === 0
          ? `No posts found.`
          : `There are ${filteredPosts.length} total posts.`}
      </h2>

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
};

export default Posts;
