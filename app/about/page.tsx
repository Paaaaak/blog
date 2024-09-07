import React, { Suspense } from "react";
import Background from "../../components/background";

export const metadata = {
  title: "About | Paaak's Blog",
};

const page = async () => {
  return (
    <>
      <header>
        <Background pageType="about"></Background>
      </header>
      <main className="main">
        <div className="main-div">
          <Suspense fallback={<div>Page is loading...</div>}>
            <div style={{ background: "black", height: "100vh" }}>
              <div>
                <h1>Experience</h1>
                <div>Nexol System 2022.10 ~ 2023.11</div>
                <div>Polycube 2023.12 ~ 2024.11</div>
                <h1>Education</h1>
                <div>
                  The State University of New York, Stony Brook 2021.03 ~
                  2026.12
                </div>
              </div>
            </div>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default page;
