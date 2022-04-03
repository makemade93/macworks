/* eslint-disable */

//scss
import "./reset.scss";
import "./App.scss";

// 컴퍼넌트
import San from "./San.js";

// 아이콘
import Arrow from "./icons/folding_arrow.svg";

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
              <Card />
              <Card />
            </div>
          </div>
        </Route>

        <Route exact path="/project/01">
          <San />
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
        <a>Project</a>
        <a>Article</a>
        <a>Profile</a>
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