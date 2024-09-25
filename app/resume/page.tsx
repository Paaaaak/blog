import React, { Suspense } from "react";
import Background from "../../components/background";
import CompanyLogo from "@/public/images/company_logo.png";
import CompanyLogo2 from "@/public/images/company_logo2.png";
import UniversityLogo from "@/public/images/university.png";
import Profile from "@/public/images/profile.jpg";
import Image from "next/image";

export const metadata = {
  title: "Resume | Paaak's Blog",
};

const page = async () => {
  return (
    <>
      <header>
        <Background pageType="resume"></Background>
      </header>
      <main className="main">
        <div className="main-div">
          <Suspense fallback={<div>Page is loading...</div>}>
            <div className="resume">
              <div className="resume-intro">
                <h1>I'm Jaehyeon Park</h1>
                <div className="resume-body">
                  <p>
                    I have 2 years work experience as web developer. I started
                    career as Industrial Technical Personnel, which is one of
                    the military alternative service in Korea. Passionate about
                    optimizing UI/UX and applying new technology on a
                    development.
                  </p>
                </div>
              </div>

              <div className="resume-experience">
                <h1>Experience</h1>
                <div className="resume-body">
                  <div className="resume-company">
                    <div className="resume-content">
                      <Image src={CompanyLogo} alt="logo" width={100} />
                      <div>
                        <h2>Polycube</h2>
                        <p>Frontend Developer</p>
                        <p>2023.12 ~ 2024.11</p>
                      </div>
                    </div>

                    <div>
                      <h3>OKCashbag Event Pages</h3>
                      <ul>
                        <li>React.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                      </ul>
                      <p>
                        Colaborate with designer, web publisher, and backend
                        engineer to build event pages, which manages an average
                        volumn of 800K+ customers per month.
                      </p>
                    </div>
                  </div>
                  <div className="resume-company">
                    <div className="resume-content">
                      <Image src={CompanyLogo2} alt="logo" width={100} />
                      <div>
                        <h2>Nexol System</h2>
                        <p>Full-Stack Developer</p>
                        <p>2022.10 ~ 2023.11</p>
                      </div>
                    </div>
                    <div>
                      <h3>Samsonite WMS program</h3>
                      <ul>
                        <li>Node.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                      </ul>
                      <p>
                        Develop warehouse management system for portable
                        devices.
                      </p>
                    </div>
                    <div>
                      <h3>Samsonite EPOS web page</h3>
                      <ul>
                        <li>Spring</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                      </ul>
                      <p>
                        Develop EPOS that 500+ retailors can manage their
                        business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="resume-project">
                <h1>Open Sources</h1>
                <div className="resume-body">
                  <div className="resume-content">
                    <Image src={Profile} alt="logo" width={100} />
                    <div>
                      <h3>Paaak's blog</h3>
                      <p>Running tech blog based on frontend development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="resume-education">
                <h1>Education</h1>
                <div className="resume-body">
                  <div className="resume-content">
                    <Image src={UniversityLogo} alt="logo" width={100} />
                    <div>
                      <h3>The State University of New York, Stony Brook</h3>
                      <p>2021.03 ~ 2026.12</p>
                      <p>Bachelor</p>
                      <p>Computer Science Major</p>
                    </div>
                  </div>
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
