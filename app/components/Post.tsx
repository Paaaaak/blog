import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  post: BlogPost;
};

export default function Post({ post }: Props) {
  const { id, title, subtitle, date, tags, backgroundImage } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <div className="post">
      <img
        className="post__image"
        src={backgroundImage}
        alt="Post Background"
      ></img>
      <Link href={`/post/${id}`}>
        <div className="post__body">
          <ul className="post__tags">
            {tags.map((tag) => (
              <li className="post__tag-item" key={tag}>
                <div className="post__badge">{tag}</div>
              </li>
            ))}
            {/* <img src={logoImage} alt='logo' className="post__logo" /> */}
          </ul>
          <div className="post__title">
            <h2>{title}</h2>
          </div>
          <div className="post__subtitle">{subtitle}</div>
          <div className="post__date">{formattedDate}</div>
        </div>
      </Link>
    </div>
  );
}
