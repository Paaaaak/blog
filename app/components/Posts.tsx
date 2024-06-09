import { getSortedPostsData } from "@/lib/posts";
import Post from "./Post";

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section>
      <ul className="">
        {posts.map((post) => {
          console.log(post);
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
