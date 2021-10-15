import React, { useState } from 'react';
import './topbar.css';
import Web from './web/Web';
import Mobile from './mobile/Mobile';

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="topbar">
      <div className="top">
        <div className="topleft">
          <h1>BlogTalk</h1>
        </div>

        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}
