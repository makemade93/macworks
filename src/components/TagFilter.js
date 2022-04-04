/* eslint-disable */

// Icon
import Arrow from "../assets/icons/folding_arrow.svg";

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

export default TagFilter;
