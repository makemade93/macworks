/* eslint-disable */

//scss
import "./San.scss";

// 아이콘
import Arrow from "./icons/folding_arrow.svg";

function San() {
  return (
    <div className="container">
      <div className="image-wide">{/* big image */}</div>
      <div className="project-title">
        <h3>Cafe San</h3>
        <div className="tag tag_year">2020</div>
        <div className="tag tag_brand">Brand</div>
      </div>
      <div className="project-desc">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but salso the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="image-small">1</div>
      <div className="image-small">2</div>
      <div className="image-small">3</div>
      <div className="divider"></div>
      <div className="image-big"></div>
      <More />
    </div>
  );
}

function More() {
  return (
    <div className="tag-categories">
      <div className="tag-categories__titles">
        <h4>Read Project Detail</h4>
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

export default San;
