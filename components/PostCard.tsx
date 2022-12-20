import React from "react";
import { format } from "fecha";
import { PostData } from "../loader";
import { Tag } from "./Tag";
import Link from "next/link";

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;

  return (
    <Link href={`/${post.path}`}>
      <div className="terminal-card clickable">
        <figure>
          {post.thumbnailPhoto && (
            <img src={post.thumbnailPhoto} alt={post.title} />
          )}
          <figcaption>
            {post.title && <h2>{post.title}</h2>}
            {false && post.subtitle && <p>{post.subtitle}</p>}
            <p>
              {props.post.datePublished
                ? format(new Date(props.post.datePublished), "MMMM Do, YYYY")
                : ""}
            </p>
            <div className="flex-spacer"> </div>
            {false && (
              <div className="tag-container">
                {post.tags && (post.tags || []).map((tag) => <Tag tag={tag} />)}
              </div>
            )}
          </figcaption>
        </figure>
      </div>
    </Link>
  );
};
