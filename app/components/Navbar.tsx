import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="">
      <div className="">
        <h1 className="">
          <Link
            href="/"
            className=""
          >
            Jaehyeon Park
          </Link>
        </h1>
        <div className="">
          <Link
            className=""
            href="https://www.youtube.com/@DaveGrayTeachesCode"
          >
            <FaYoutube />
          </Link>
          <Link
            className=""
            href="https://courses.davegray.codes/"
          >
            <FaLaptop />
          </Link>
          <Link
            className=""
            href="https://github.com/gitdagray"
          >
            <FaGithub />
          </Link>
          <Link
            className=""
            href="https://twitter.com/yesdavidgray"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
