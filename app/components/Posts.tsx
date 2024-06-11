import { getSortedPostsData } from "@/lib/posts";
import Post from "./Post";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      <ul className="">
        {posts.map((post) => {
          if (!post.isPublished) {
            return;
          }
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
