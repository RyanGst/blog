import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { loadBlogPosts, loadMarkdownFile, PostData } from "../loader";
import { PostCard } from "../components/PostCard";
import Banner from "./components/Banner/Banner";

import styles from "./styles/index.module.css";

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <>
      <div className={`container ${styles.show}`}>
        <Head>
          <title>ryangst</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Banner />
        </div>

        <div
          className="section"
          style={{
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <mark>you might like:</mark>
          <p>Read last posts:</p>
          <div className="image-grid">
            {props.posts.map((post, j) => {
              return <PostCard post={post} key={j} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile("introduction.md");
  const readmeFile = await import(`../${"README.md"}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    readme: readme,
    posts,
  };

  return { props };
};
