import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function Post({ post }: Props) {
  const { id, title, subtitle, date, tags } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div className="post-container dark">
      <Link href={`/post/${id}`}>
        <div className="post-body">
          <ul className="post-tags">
            {tags.map((tag) => (
              <li key={tag}>
                <div className="post-badge">{tag}</div>
              </li>
            ))}
            {/* <img src={logoImage} alt='logo' style={{ borderRadius: '50%', width: '25px', height: '25px'}}></img> */}
          </ul>
          <div className="post-title">
            <h3>{title}</h3>
          </div>
          <div className='post-text'>{subtitle}</div>
          <div className="post-date">{formattedDate}</div>
        </div>
      </Link>
    </div>
  );
}
