/* eslint-disable */

// 라우터
import { Link, Route, Switch, useHistory } from "react-router-dom";

function Card(props) {
  let history = useHistory();

  return (
    <div
      className="card"
      onClick={() => {
        history.push("/projects/" + `${props.articleData.id}`);
      }}
    >
      <div className="card__tags">
        <div className="tag tag_year">{props.articleData.tag[0].tagName}</div>
        <div className="tag tag_brand">{props.articleData.tag[1].tagName}</div>
      </div>
      <div className="card__text">
        <h4>{props.articleData.title}</h4>
        <p>{props.articleData.desc}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
