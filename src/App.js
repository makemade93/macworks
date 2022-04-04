/* eslint-disable */

// scss
import "./styles/reset.scss";
import "./styles/App.scss";

// 페이지
import San from "./pages/San.js";
import About from "./pages/About.js";

// 아이콘
import Arrow from "./assets/icons/folding_arrow.svg";

// 라우터
import { Link, Route, Switch, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <div className="contents">
            <TagFilter />
            <div className="project-list">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </Route>

        <Route exact path="/project/01">
          <San />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

function TagFilter() {
  return (
    <div className="tag-categories">
      <div className="tag-categories__titles">
        <h4>All Project</h4>
        <div className="tag-categories__title__counter">
          <span>15{/*갯수 표시*/}</span>
        </div>
      </div>
      <img className="tag-categories__icon" src={Arrow}>
        {/*폴드 아이콘*/}
      </img>
    </div>
  );
}

function Card() {
  let history = useHistory();
  return (
    <div
      className="card"
      onClick={() => {
        history.push(
          `/project/` + "01" /* props 사용하여 자동으로 카드 연결되게 하기*/
        );
      }}
    >
      <div className="card__tags">
        <div className="tag tag_year">2020</div>
        <div className="tag tag_brand">Brand</div>
      </div>
      <div className="card__text">
        <h4>Project Title</h4>
        <p>Description about projectsadxcxcxzcxc...</p>
      </div>
    </div>
  );
}

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

function Footer() {
  return (
    <div className="footer">
      <p>Copyright © 2022 archive.macworks. All rights reserved.</p>
    </div>
  );
}

export default App;
