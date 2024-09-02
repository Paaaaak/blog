"use client";

import React, { useState, useEffect } from "react";
import getFormattedDate from "@/lib/getFormattedDate";
import { getReadingTime } from "@/lib/getReadingTime";

interface PostInfo {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  backgroundImage: string;
  isPublished: boolean;
  content: string;
}

interface HeaderProps {
  postInfo: PostInfo;
}

const PostBackground: React.FC<HeaderProps> = ({ postInfo }) => {
  const pubDate = getFormattedDate(postInfo.date);
  const readingTime = getReadingTime(postInfo.content);

  return (
    <div
      className="post-background"
      style={{ backgroundImage: `url(${postInfo.backgroundImage})` }}
    >
      <div className="post-background__overlay">
        <div className="post-background__text">
          <div className="post-background__title">{postInfo.title}</div>
          <div className="post-background__subtitle">{postInfo.subtitle}</div>
          <div className="post-background__info">
            <span className="post-background__date">
              Date: {pubDate}
            </span>
            <span className="post-background__reading-time">
              Time: {readingTime}
            </span>
            <ul className="post-background__tags">
              {postInfo.tags.map((tag) => (
                <li key={tag} className="post-background__tag-item">
                  <div className="post-background__hashtag">
                    <span>{tag}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBackground;
