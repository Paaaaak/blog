"use client";

import React, { useState, useEffect } from "react";

const imageUrl: { [key: string]: string } = {
  main: "https://i.pinimg.com/564x/b3/79/52/b37952f5dd53a812a08dca6e5b207613.jpg",
  posts:
    "https://i.pinimg.com/564x/73/28/34/73283455b0dc95b9853f32971fbbbb3d.jpg",
  about:
    "https://i.pinimg.com/564x/74/18/b7/7418b7aa1f39518972cf90b9e5f9153a.jpg",
};

const titles: { [key: string]: string } = {
  main: "Paak's Architect",
  posts: "All Posts",
  about: "About",
};

const subtitles: { [key: string]: string } = {
  main: "Creating helpful content for Frontend Development",
  posts: "Check out all posts with various topics",
  about: "Introduce myself",
};

interface HeaderProps {
  pageTitle?: string;
  pageSubtitle?: string;
  pageType: string;
  backgroundImage?: string;
}

const Background: React.FC<HeaderProps> = ({
  pageTitle,
  pageSubtitle,
  pageType,
  backgroundImage,
}) => {
  const [background, setBackground] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [subtitle, setSubtitle] = useState<string | null>(null);

  useEffect(() => {
    setBackground(backgroundImage || imageUrl[pageType]);
    setTitle(pageTitle ? pageTitle : titles[pageType]);
    setSubtitle(pageSubtitle ? pageSubtitle : subtitles[pageType]);
  }, []);

  return (
    <div className="header-div">
      <div
        className="header-text"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={`header-title ${pageType === "post" && "post"}`}>
          <span>{title}</span>
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Background;
