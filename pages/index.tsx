import Head from 'next/head';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div className="content">
      <Head>
        <title>Introducing Devii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="introduction">
        <h1>Introduction to Devii</h1>
        <Markdown source={props.introduction} />
      </div>

      <div className="section">
        <h2>Features</h2>
        <div className="medium-wide">
          <Markdown source={props.features} />
        </div>
      </div>

      <div className="section">
        <h2>Você pode gostar: </h2>
        <p>
          Leia outros artigos que <code>acabaram de sair do forno</code>.
        </p>
        <div className="post-card-container">
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
  const introduction = await loadMarkdownFile('introduction.md');
  const features = await loadMarkdownFile('features.md');
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    features: features.contents,
    readme: readme,
    posts,
  };

  return { props };
};
