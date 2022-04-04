/* eslint-disable */

// Component
import TagFilter from "../components/TagFilter.js";
import Card from "../components/Card.js";

//styles
function Home() {
  return (
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
  );
}

export default Home;
