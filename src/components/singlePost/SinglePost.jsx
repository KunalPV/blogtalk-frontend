import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

import './singlePost.css';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState([]);
  const PF = process.env.REACT_APP_BACKEND_URL + 'images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updatedMode, setUpdatedMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        description: desc,
      });
      setUpdatedMode(false);
    } catch (err) {}
  };

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="single-post-img" />
        )}
        {updatedMode ? (
          <input
            type="text"
            value={title}
            className="single-post-title-input"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post-title">
            {title}
            {post.username === user?.username && (
              <div className="single-post-edit">
                <i
                  className="single-posticon fa-solid fa-pen-to-square"
                  onClick={() => setUpdatedMode(true)}
                ></i>
                <i
                  className="single-posticon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="single-post-info">
          <span className="single-post-author">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updatedMode ? (
          <textarea
            className="single-postdes-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="single-postdes">{desc}</p>
        )}
        {updatedMode && (
          <button className="single-post-btn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
