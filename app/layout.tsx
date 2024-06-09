import Header from "./components/Header";
import Footer from "./components/Footer";
import '@/sass/main.scss';
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Jaehyeon's Blog",
  description: "Created by Dave Gray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <Header pageType="main"></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
