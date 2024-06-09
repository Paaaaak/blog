import Posts from "./components/Posts";
import Namecard from "./components/Namecard";

export default function Home() {
  return (
    <main className="main">
      <Namecard></Namecard>
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
