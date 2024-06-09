import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function Post({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    // <li className="">
    //   <Link
    //     className=""
    //     href={`/post/${id}`}
    //   >
    //     {title}
    //   </Link>
    //   <br />
    //   <p className="">{formattedDate}</p>
    // </li>
    <div className='post-container dark'>
    <Link href={`/post/${id}`}>
      <div className='post-body'>
        {/* <ul className='post-tags'>
          {tags.map(tag => (
            <li key={tag}><div className='post-badge'>{capitalize(tag)}</div></li>
          ))}
          <img src={logoImage} alt='logo' style={{ borderRadius: '50%', width: '25px', height: '25px'}}></img>
        </ul> */}
        <div className='post-title'><h3>{title}</h3></div>
        {/* <div className='post-text'>{subtitle}</div> */}
        <div className='post-date'>{date}</div>
      </div>
    </Link>
  </div>
  );
}
