import React from "react";
import Background from "../../components/background";

const Loading = () => {
  return (
    <>
      <header>
        <Background pageType="about"></Background>
      </header>
      <main className="main">
        <div className="main-div">page loading...</div>
      </main>
    </>
  );
};

export default Loading;
