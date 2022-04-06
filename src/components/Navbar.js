/* eslint-disable */

// 라우터
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link as={Link} to="/">
        <h3>archive.mackworks</h3>
      </Link>
      <div className="navbar__menu">
        <a>Project</a>
        <Link as={Link} to="/article">
          <a>Article</a>
        </Link>
        <Link as={Link} to="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
