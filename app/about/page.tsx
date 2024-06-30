import React from "react";
import Background from "../components/Background";

export const metadata = {
  title: "Jaehyeon's Blog asdasd",
  description: "Created by Dave Gray",
  keywords: "nextjs, seo, metadata",
};

const page = () => {
  return (
    <main className="main">
      <Background pageType="about"></Background>
      <div className="main-div">
        <div style={{background: "black", height: "100vh"}}></div>
      </div>
    </main>
  );
};

export default page;
