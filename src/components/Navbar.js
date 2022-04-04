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
        <Link as={Link} to="/about">
          <a>Project</a>
        </Link>
        <Link as={Link} to="/about">
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
