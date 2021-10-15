import './login.css';
import React, { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(
        process.env.REACT_APP_ASSET_URL + '/auth/login',
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter Your username" ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          ref={passwordRef}
        />
        <button className="login-submit" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}
