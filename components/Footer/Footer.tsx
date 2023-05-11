import React from "react";
import { globals } from "../../globals";

export const Footer: React.FC = () => (
  <section className="container">
    <hr/>
    <div className="image-grid">
      <h2>{`© ${globals.yourName} ${new Date().getFullYear()}`}</h2>
      <div className="row">
        <a href={globals.githubUrl} style={{ border: "none" }}>
          <img
            src="/img/icons/gh.svg"
            alt="GitHub"
            width="24"
            height="24"
          />
        </a>
        <a href={globals.twitterUrl} style={{ border: "none" }}>
          <img src="/img/icons/twitter.svg" alt="Twitter" width="24" height="24" />
        </a>
        <a href="/rss.xml" style={{ border: "none" }}>
          <img src="/img/icons/rss-white.svg" alt="RSS Feed" width="24" height="24" />
        </a>
      </div>
    </div>
  </section>
);
