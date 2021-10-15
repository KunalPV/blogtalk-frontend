import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../../context/Context';
import './web.css';

function Web() {
  const { user, dispatch } = useContext(Context);
  const PF = process.env.REACT_APP_BACKEND_URL + '/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="topright">
      <ul className="toplist">
        <li className="toplist-item">
          <NavLink to="/" exact className="link" activeClassName="link-active">
            Home
          </NavLink>
        </li>
        <li className="toplist-item">
          <NavLink to="/about" className="link" activeClassName="link-active">
            About
          </NavLink>
        </li>
        <li className="toplist-item">
          <NavLink to="/contact" className="link" activeClassName="link-active">
            Contact
          </NavLink>
        </li>
        <li className="toplist-item">
          <NavLink to="/write" className="link" activeClassName="link-active">
            Write
          </NavLink>
        </li>
        <li className="toplist-item" onClick={handleLogout}>
          {user && 'Logout'}
        </li>
      </ul>

      {user ? (
        <NavLink to="/settings">
          <img className="topimg" src={PF + user.profilePic} alt="profile" />
        </NavLink>
      ) : (
        <ul className="toplist">
          <li className="login-btn">
            <NavLink className="link" to="/login">
              Login
            </NavLink>
          </li>
          <span className="span">or</span>
          <li className="register-btn">
            <NavLink className="link" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Web;
