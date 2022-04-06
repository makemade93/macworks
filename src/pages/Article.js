/* eslint-disable */

// Component
import TagFilter from "../components/TagFilter.js";
import Card from "../components/Card.js";

//styles

function Article(props) {
  //props
  let articleData = props.articleData;

  return (
    <div className="contents">
      {articleData.map((articleData, i) => {
        return <Card projectData={articleData} key={i} />;
      })}
    </div>
  );
}

export default Article;
