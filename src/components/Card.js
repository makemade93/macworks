/* eslint-disable */

// 라우터
import { Link, Route, Switch, useHistory } from "react-router-dom";

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

export default Card;
