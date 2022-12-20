import React from "react";
import { Markdown } from "./Markdown";
import { PostData } from "../loader";
import { PostMeta } from "./PostMeta";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <article className="container">
      <PostMeta post={post} />
      {post.bannerPhoto && (
        <img className="image" src={post.bannerPhoto} alt={title} />
      )}

      <section>
        {title && <h1>{title}</h1>}
        {subtitle && <i><u>"{subtitle}"</u></i>}
        <br />
      </section>

      <div className="blog-post-content">
        <Markdown source={post.content} />
      </div>
    </article>
  );
};
