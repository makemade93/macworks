/* eslint-disable */

//ReactHook
import React, { useState } from "react";

// 라우터
import { Link } from "react-router-dom";

function Navbar() {
  let [menuState, changeMenuState] = useState(false);
  return (
    <div className="navbar">
      <Link as={Link} to="/">
        <h3>archive.mackworks</h3>
      </Link>

      {/* 모바일 햄버거 버튼 */}
      <div className="navbar__mobile">
        {menuState === true ? <MenuOn /> : <MenuOff />}
      </div>

      {/* 데스크톱 개별 버튼 */}
      <div className="navbar__menu mobile-hidden">
        <Link as={Link} to="/">
          <span>
            <a className="navbar__a mobile-hidden">Project</a>
          </span>
        </Link>
        <Link as={Link} to="/article">
          <span>
            <a className="navbar__a mobile-hidden">Article</a>
          </span>
        </Link>
        <Link as={Link} to="/about">
          <span>
            <a className="navbar__a mobile-hidden">About</a>
          </span>
        </Link>
      </div>
    </div>
  );
}

function MenuOff() {
  return (
    <div className="navbar__mobile_menu">
      {/* 닫을때 */}
      <div className="navbar__mobile_menu__lineOn"></div>
      <div className="navbar__mobile_menu__lineOn"></div>
    </div>
  );
}

function MenuOn() {
  return (
    <div className="navbar__mobile_menu">
      <div className="navbar__mobile_menu__lineOff"></div>
      <div className="navbar__mobile_menu__lineOff"></div>
      <div>
        <Link as={Link} to="/">
          <span>
            <a>Project</a>
          </span>
        </Link>
        <Link as={Link} to="/article">
          <span>
            <a>Article</a>
          </span>
        </Link>
        <Link as={Link} to="/about">
          <span>
            <a>About</a>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
