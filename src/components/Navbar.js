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
