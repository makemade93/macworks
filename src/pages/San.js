/* eslint-disable */

//ReactHook
import React, { useState } from "react";

//scss
import "../styles/Project.scss";

// 아이콘
import Arrow from "../assets/icons/folding_arrow.svg";

function San(props) {
  //props
  let [modal, changeModal] = useState(false);

  return (
    <div className="contents">
      <div className="container">
        <div className="image-wide">{/* big image */}</div>
        <div className="project-title">
          <h3>Cafe San</h3>
          <div className="project__tags">
            <div className="tag tag_year">2020</div>
            <div className="tag tag_brand">Brand</div>
          </div>
        </div>
        <div className="project-desc">
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but salso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          </p>
        </div>
        <div className="image-small img2"></div>
        <div className="image-small img3"></div>
        <div className="image-small img4"></div>
      </div>

      {/*<div className="divider"></div>*/}

      <div className="container">
        <div className="project-title">
          <h4>Project Output</h4>
        </div>
        <div className="project-desc">
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`}
          </p>
        </div>
        <div className="image-big img5"></div>
        <div className="image-big img6"></div>
        <div className="image-big img7"></div>
        <div
          className="column3"
          onClick={() => {
            changeModal(!modal);
          }}
        >
          <More />
        </div>
        {modal === true ? <p>"modal ON"</p> : null}
      </div>
    </div>
  );
}

function More() {
  return (
    <div className="tag-categories">
      <div className="tag-categories__titles">
        <h4>Read Project Detail</h4>
      </div>
      <img className="tag-categories__icon" src={Arrow}>
        {/*폴드 아이콘*/}
      </img>
    </div>
  );
}

export default San;
