"use client";

import React from "react";
import Menu from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="header">
      <nav className="header__nav">
        <label className="header__label">
          <Link href="/">
            <h1 className="header__title">Paaak</h1>
          </Link>
        </label>
        <div className="header__menu-container">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="header__menu-item">
              <Link href="/posts">
                Posts
              </Link>
            </li>
            <li className="header__menu-item">
              <Link href="/about">
                About
              </Link>
            </li>
          </ul>
          <div
            className={`header__toggle-button ${
              isOpen ? "header__toggle-button--active" : ""
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <MenuOpen></MenuOpen>
            ) : (
              <Menu></Menu>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`header__burger-menu ${
          isOpen ? "header__burger-menu--show" : ""
        }`}
      >
        <ul className="header__burger-menu-list">
          <li className="header__burger-menu-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="header__burger-menu-item">
            <Link href="/posts">
              Posts
            </Link>
          </li>
          <li className="header__burger-menu-item">
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
