import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(
        process.env.REACT_APP_ASSET_URL + '/categories'
      );
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          {cats.map((c) => (
            <Link key={c._id} to={`/?cat=${c.name}`} className="link">
              <li className="sidebar-list-item">{c.name} </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow Us</span>
        <div className="sidebar-social">
          <i className="sidebaricon fa-brands fa-facebook"></i>
          <i className="sidebaricon fa-brands fa-instagram"></i>
          <i className="sidebaricon fa-brands fa-twitter"></i>
          <i className="sidebaricon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
