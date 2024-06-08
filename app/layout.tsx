import Header from "./components/Header";
import MyProfilePic from "./components/MyProfilePic";
import '@/sass/main.scss';

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
        <Header></Header>
        <MyProfilePic></MyProfilePic>
        {children}
      </body>
    </html>
  );
}
