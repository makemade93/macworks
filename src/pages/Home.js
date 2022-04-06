/* eslint-disable */

// Component
import TagFilter from "../components/TagFilter.js";
import Card from "../components/Card.js";

//styles

function Home(props) {
  //props
  let projectData = props.projectData;

  return (
    <div className="contents">
      <TagFilter />
      <div className="project-list">
        {projectData.map((projectData, i) => {
          return <Card projectData={projectData} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Home;
