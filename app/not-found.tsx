import Background from "../components/background";

export const metadata = {
  title: "Page Not Found | Paaak's Blog",
};

export default function Home() {
  return (
    <main className="main">
      <Background pageType="main"></Background>
      <div className="main-div">404 PAGE</div>
    </main>
  );
}
