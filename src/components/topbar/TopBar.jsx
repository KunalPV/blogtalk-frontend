import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = process.env.REACT_APP_BACKEND_URL + 'images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="top">
      <div className="topleft">
        <h1>BlogTalk</h1>
      </div>

      <div className="topright">
        <ul className="toplist">
          <li className="toplist-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="toplist-item">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="toplist-item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="toplist-item">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="toplist-item" onClick={handleLogout}>
            {user && 'Logout'}
          </li>
        </ul>

        {user ? (
          <Link to="/settings">
            <img className="topimg" src={PF + user.profilePic} alt="profile" />
          </Link>
        ) : (
          <ul className="toplist">
            <li className="login-btn">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <span className="span">or</span>
            <li className="register-btn">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
