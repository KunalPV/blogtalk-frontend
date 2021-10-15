import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

export default function Post({ post }) {
  const PF = process.env.REACT_APP_BACKEND_URL + '/images/';
  return (
    <>
      <div className="post">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="post-img" />
        )}
        <div className="post-info">
          <div className="post-cats">
            {post.categories.map((c) => (
              <span className="post-cat">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`}>
            <span className="post-title">{post.title}</span>
          </Link>
          <hr />
          <span className="post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="post-des">{post.description}</p>
      </div>
    </>
  );
}
