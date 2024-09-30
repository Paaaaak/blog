"use client";

import React, { useState, useEffect, useRef } from "react";

const imageUrl: { [key: string]: string } = {
  main: "https://i.pinimg.com/564x/b3/79/52/b37952f5dd53a812a08dca6e5b207613.jpg",
  posts:
    "https://i.pinimg.com/564x/73/28/34/73283455b0dc95b9853f32971fbbbb3d.jpg",
  resume:
    "https://i.pinimg.com/564x/74/18/b7/7418b7aa1f39518972cf90b9e5f9153a.jpg",
};

const titles: { [key: string]: string } = {
  main: "Paak's Architect",
  posts: "All Posts",
  resume: "Resume",
};

const subtitles: { [key: string]: string } = {
  main: "Creating helpful content for Frontend Development",
  posts: "Check out all posts with various topics",
  resume: "Introduce myself",
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
      <div className="header-text" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
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
    </div>
  );
};

export default Background;
