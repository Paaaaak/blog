import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export default function Home() {
  return (
    <main className="main">
      <MyProfilePic></MyProfilePic>
      <p className="">
        Hello and Welcome 👋&nbsp;
        <span className="">
          I&apos;m <span className="">Jaehyeon</span>.
        </span>
      </p>
      <Posts></Posts>
    </main>
  );
}
