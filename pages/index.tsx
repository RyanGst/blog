import Head from "next/head";
import { generateRSS } from "../rssUtil";
import { Markdown } from "../components/Markdown";
import { PostData, loadBlogPosts, loadMarkdownFile } from "../loader";
import { PostCard } from "../components/PostCard";
import Banner from "../components/Banner/Banner";

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div className="container">
      <Head>
        <title>ryangst</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <div className="introduction">
          <Markdown source={props.introduction} />
        </div>
      </div>

      <div className="section">
        <h2>Você pode gostar: </h2>
        <p>
          Leia outros artigos que <code>acabaram de sair do forno:</code>
        </p>
        <div className="image-grid">
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>
    </div>
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
