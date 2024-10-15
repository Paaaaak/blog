"use client";

import React, { useState, useEffect, useRef } from "react";

const imageUrl: { [key: string]: string } = {
  main: "https://cdn.pixabay.com/photo/2020/02/29/14/00/landscape-4890162_1280.png",
  posts:
    "https://cdn.pixabay.com/photo/2024/09/15/19/16/ai-generated-9049861_1280.png",
  resume:
    "https://cdn.pixabay.com/photo/2024/09/15/19/16/ai-generated-9049866_1280.png",
};

const titles: { [key: string]: string } = {
  main: "Paak's Architect",
  posts: "All Posts",
  resume: "Resume",
};

const subtitles: { [key: string]: string } = {
  main: "Creating helpful content for Frontend Development",
  posts: "Check out all posts with various topics",
  resume: "Brief summary of my career as Frontend Developer",
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

  const titleRef = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setBackground(backgroundImage || imageUrl[pageType]);
    setTitle(pageTitle ? pageTitle : titles[pageType]);
    setSubtitle(pageSubtitle ? pageSubtitle : subtitles[pageType]);

    if (titleRef.current) {
      titleRef.current.classList.add("show");
    }

    const timer = setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add("show");
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="header-div"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="header-text-container"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className={`header-title-container ${pageType === "post" && "post"}`}
        >
          <span className="header-title" ref={titleRef}>
            {title}
          </span>
          <span className="header-subtitle" ref={subtitleRef}>
            {subtitle}
          </span>
        </div>
      </div>
      <div className="header-blur"></div>
    </div>
  );
};

export default Background;
