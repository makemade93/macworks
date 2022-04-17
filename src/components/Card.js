/* eslint-disable */

// 라우터
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
// Scss

function Card(props) {
  let history = useHistory();
  const cardBgUrl = [];
  return (
    <div
      className="card"
      onClick={() => {
        history.push("/projects/" + `${props.projectData.id}`);
      }}
    >
      <div className="card__tags">
        <div className="tag tag_year">{props.projectData.tag[0].tagName}</div>
        <div className="tag tag_brand">{props.projectData.tag[1].tagName}</div>
      </div>
      <div className="card__text">
        <h4>{props.projectData.title}</h4>
        <p>{props.projectData.desc}</p>
      </div>
    </div>
  );
}

export default Card;
