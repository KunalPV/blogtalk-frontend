import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../context/Context';
import './mobile.css';

function Mobile({ isOpen, setIsOpen }) {
  const { user, dispatch } = useContext(Context);
  const PF = process.env.REACT_APP_BACKEND_URL + '/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="mobile">
      <div className="mobile-menu">
        <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className="fi fi-rr-cross"></i>
        </div>
        <ul className="mobile-toplist">
          <li className="mobile-toplist-item">
            <Link to="/" className="link" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>
          </li>
          <li className="mobile-toplist-item">
            <Link
              to="/about"
              className="link"
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
          </li>
          <li className="mobile-toplist-item">
            <Link
              to="/contact"
              className="link"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </Link>
          </li>
          <li className="mobile-toplist-item">
            <Link
              to="/write"
              className="link"
              onClick={() => setIsOpen(!isOpen)}
            >
              Write
            </Link>
          </li>
          <li className="mobile-toplist-item" onClick={handleLogout}>
            {user && 'Logout'}
          </li>
        </ul>

        {user ? (
          <Link to="/settings">
            <img
              className="mobile-topimg"
              src={PF + user.profilePic}
              alt="profile"
            />
          </Link>
        ) : (
          <ul className="mobile-toplist">
            <li className="mobile-login-btn">
              <Link
                className="mobile-link"
                to="/login"
                onClick={() => setIsOpen(!isOpen)}
              >
                Login
              </Link>
            </li>
            <span className="mobile-span">or</span>
            <li className="mobile-register-btn">
              <Link
                className="mobile-link"
                to="/register"
                onClick={() => setIsOpen(!isOpen)}
              >
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Mobile;
