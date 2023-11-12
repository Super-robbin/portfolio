import myPlace from "../../images/myPlace.jpg";
import gitHub from "../../images/gitHub.svg"
const Project = () => {
  return (
    <div className="section" id="projects">
      <p className="above-section">
        <span>- </span>
        projects
      </p>
      <h3 className="title-section">Featured Portfolios</h3>
      <div className="projects-container">
        <div className="project-card">
          <img src={myPlace} alt="MyPlace" />
          <h3 className="project-name">MyPlace</h3>
          <p className="project-description">
            Web App to track visited and desired locations and share your travel
            map with friends
          </p>
          <div className="project-buttons">
            <a
              type="button"
              href="https://myplace-acrry.onrender.com/"
              className="site-button"
            >
              Site
            </a>
            <a
              type="button"
              href="https://myplace-acrry.onrender.com/"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic"/>
            </a>
          </div>
        </div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
        <div className="project-card"></div>
      </div>
    </div>
  );
};

export default Project;
