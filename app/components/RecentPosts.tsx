import { getSortedPostsData } from "@/lib/posts";
import Post from "./Post";

export default function RecentPosts() {
  const posts = getSortedPostsData();
  const recentPosts = posts.slice(0, 5);

  return (
    <section>
      <ul className="">
        {recentPosts.map((post) => {
          if (!post.isPublished) {
            return;
          }
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
