import React from "react";
import Background from "../components/Background";

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
