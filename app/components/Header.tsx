"use client";

import React, { useState, useEffect } from "react";

const imageUrl: { [key: string]: string } = {
  main: "https://i.pinimg.com/1200x/e6/23/30/e623306acb678b10a2ea8dbc0ac3dca3.jpg",
  posts:
    "https://images.pexels.com/photos/1249183/pexels-photo-1249183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  about:
    "https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
  singlePostBackground?: string;
}

const Header: React.FC<HeaderProps> = ({
  pageTitle,
  pageSubtitle,
  pageType,
  singlePostBackground,
}) => {
  const [background, setBackground] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [subtitle, setSubtitle] = useState<string | null>(null);

  useEffect(() => {
    setBackground(singlePostBackground || imageUrl[pageType]);
    setTitle(pageTitle ? pageTitle : titles[pageType]);
    setSubtitle(pageSubtitle ? pageSubtitle : subtitles[pageType]);
  }, []);

  return (
    <header>
      <div
        className="header-text"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={`header-title ${pageType === "post" && "post"}`}>
          <span>{title}</span>
          <span>{subtitle}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
