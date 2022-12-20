import Link from "next/link";
import React from "react";
import { globals } from "../../globals";

interface HeaderProps {
  currentRoute: string;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const activeRoute = (routeName: string) => {
    return currentRoute === routeName ? "active" : "";
  };

  return (
    <div className="container">
      <div className="terminal-nav">
        <header className="terminal-logo">
          <div className="logo terminal-prompt">
            <a href="/" className="no-style">
              {globals.siteName}
            </a>
          </div>
        </header>
        <nav className="terminal-menu">
          <ul>
            <li>
              <Link href="/">
                <a className={`menu-item  ${activeRoute("/")}`}>Home</a>
              </Link>{" "}
            </li>
           {/*  <li>
              <Link href="/blog">
                <a className={`menu-item ${activeRoute("/blog")}`}>Blog</a>
              </Link>{" "}
            </li> */}
            <li>
              <a href={globals.githubUrl} target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
