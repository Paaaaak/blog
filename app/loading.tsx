import React from "react";
import Background from "../components/background";

const Loading = () => {
  return (
    <>
      <header>
        <Background pageType="main"></Background>
      </header>
      <main className="main">
        <div className="main-div">page loading...</div>
      </main>
    </>
  );
};

export default Loading;
