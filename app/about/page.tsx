import React, { Suspense } from "react";
import Background from "../../components/Background";
import Loading from "../loading";

export const metadata = {
  title: "Jaehyeon's Blog asdasd",
  description: "Created by Dave Gray",
  keywords: "nextjs, seo, metadata",
};

const page = () => {
  return (
    <>
      <header>
        <Background pageType="about"></Background>
      </header>
      <main className="main">
        <div className="main-div">
          <div style={{ background: "black", height: "100vh" }}>
            <div>
              <h1>Experience</h1>
              <div>Nexol System 2022.10 ~ 2023.11</div>
              <div>Polycube 2023.12 ~ 2024.11</div>
              <h1>Education</h1>
              <div>
                The State University of New York, Stony Brook 2021.03 ~ 2026.12
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
