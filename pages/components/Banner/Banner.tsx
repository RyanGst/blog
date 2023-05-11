import React from "react";

import styles from "./Banner.module.css";
import { constants } from "../../../constants";

export default function Banner() {
  return (
    <div className={styles.article}>
      <section>
        <h1>
          <mark>welcome!</mark>
        </h1>
        <div className={` ${styles.row}`}>
          <p style={{ textAlign: "justify" }}>
            Hi there, my name is Ryan Lucas, and welcome to my personal website!
            I'm a {new Date().getFullYear() - 2002}-year-old tech enthusiast who
            loves all things related to mobile app development. My passion for
            technology and programming led me to graduate from{" "}
            <a href={"https://www.fatecourinhos.edu.br/"} target={"_blank"}>
              Ourinhos Technology College
            </a>
            , and I've been working as an app developer for almost 4 years now.
            <br />
          </p>
          <div
            style={{
              width: "100%",
            }}
          >
            <iframe
              title="gif"
              id={"iframe"}
              src="https://giphy.com/embed/ASd0Ukj0y3qMM"
              frameBorder="0"
              style={{
                pointerEvents: "none",
              }}
            ></iframe>
          </div>
        </div>
      </section>
      <section>
        <h1>
          <mark>about me:</mark>
        </h1>
        <p>
          In my free time, you can often find me watching the Matrix films or
          tinkering with new tech gadgets. However, there are few things that
          get on my nerves more than bureaucracy and slow feedback (and i think
          every manager should
          <a
            href={
              "https://www.infoworld.com/article/3649773/how-to-manage-software-developers-without-micromanaging.html"
            }
            target={"_blank"}
          >
            {" "}
            read this
          </a>
          ).
        </p>
      </section>

      <section>
        <h1>
          <mark>contact:</mark>
        </h1>
        <p>
          If you're interested in seeing some of my work, please feel free to
          check out my LinkedIn profile and GitHub page using the links above.
          I'm always excited to connect with other tech enthusiasts and discuss
          the latest trends in mobile development. Thanks for stopping by!
        </p>

        <div className={styles.row}>
          {constants.links.map((socialMedia) => (
            <a
              key={socialMedia.name}
              href={socialMedia.url}
              target={"_blank"}
              className={styles.socialMedia}
            >
              <img
                src={socialMedia.icon}
                alt={socialMedia.name}
                width="24"
                height="24"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
