/* eslint-disable */

//ReactHook
import React, { useState } from "react";

// Style
import "../styles/TagFilter.scss";

// Icon
import Arrow from "../assets/icons/folding_arrow.svg";

function TagFilter() {
  //props
  let [tagFilter, changeTagFilter] = useState(false);

  return (
    <div
      onClick={() => {
        changeTagFilter(!tagFilter);
      }}
    >
      {tagFilter === true ? <TagFilterOn /> : <TagFilterOff />}
    </div>
  );
}

function TagFilterOff() {
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

function TagFilterOn() {
  return (
    <div>
      <div className="tag-categories tag-categories-on_Top">
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
      <div className="tag-categories tag-categories-on_bottom">
        <div className="tagFilter__tags">
          <div className="tag tag_year">2020</div>
          <div className="tag tag_brand">brand</div>
          <div className="tag tag_year">2020</div>
          <div className="tag tag_brand">brand</div>
          <div className="tag tag_year">2020</div>
        </div>
      </div>
    </div>
  );
}
export default TagFilter;
