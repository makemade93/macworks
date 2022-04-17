/* eslint-disable */

//scss
import "../styles/Project.scss";
import "../styles/About.scss";

function About() {
  return (
    <div>
      <div className="container">
        <div className="project-title about-padding-40">
          <h4>macworks</h4>
          <div className="project__tags"></div>
        </div>
        <div className="project-desc about-padding-40">
          <p>
            {` Lorem Ipsum is simply dummy text of the printing and typesetting          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but salso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
          </p>
        </div>
      </div>
      {/* 디바이더 */}
      <div className="divider"></div>
      {/* 경력 */}
      <div className="container gap-0">
        <div className="project-title about-padding-40">
          <h4 style={{ marginTop: "30px" }}>Job Experience</h4>
        </div>
        <div className="project-desc border-bottom">
          <h5>Samsung Electronics (2020 - )</h5>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            `}
          </p>
          <hr />
        </div>
        <div className="project-desc border-bottom">
          <h5>Naver Labs (2017)</h5>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            `}
          </p>
          <hr />
        </div>
        <div className="project-desc border-bottom">
          <h5>SBS (2016)</h5>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            `}
          </p>
          <hr />
        </div>
        <div className="project-desc border-bottom">
          <h5>Samsung Design Membership (2017 - 2019)</h5>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            `}
          </p>
          <hr />
        </div>
      </div>
      {/* 디바이더 */}
      <div className="divider"></div>
      {/* 어워드 */}
      <div className="container gap-0">
        <div className="project-title about-padding-40">
          <h4 style={{ marginTop: "30px" }}>Awards</h4>
        </div>
        <div className="project-desc border-bottom">
          <h5>Samsung Electronics (2020 - )</h5>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            `}
          </p>
          <hr />
        </div>
        <div className="project-desc border-bottom">
          <h5>Naver Labs (2017)</h5>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            `}
          </p>
          <hr />
        </div>
      </div>
      {/* 디바이더 */}
      <div className="divider"></div>
      {/* 어워드 */}
      <div className="container gap-0">
        <div className="project-title about-padding-40">
          <h4 style={{ marginTop: "30px" }}>Education</h4>
        </div>
        <div className="project-desc border-bottom">
          <h5>Hongik University, Digital Media Design Major (2012 - 2020)</h5>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            `}
          </p>
          <hr />
        </div>
      </div>
      {/* 디바이더 */}
      <div className="divider" style={{ marginBottom: "100px" }}></div>
    </div>
  );
}

export default About;
