import React from "react";
import myPlace from "../../images/myPlace.jpg";
import acebook from "../../images/acebook.jpg";
import makersBnb from "../../images/makersBnb.jpg";
import weather from "../../images/weather.jpg";
import notesApp from "../../images/notesApp.jpg";
import shopManager from "../../images/shopManager.jpg";
import gitHub from "../../images/gitHub.svg";

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
              target="_blank"
              rel="noreferrer"
              className="site-button"
            >
              Site
            </a>
            <a
              type="button"
              href="https://github.com/Super-robbin/MyPlace"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={acebook} alt="Acebook" />
          <h3 className="project-name">Acebook</h3>
          <p className="project-description">
            Group project recreating a social media web app
          </p>
          <div className="project-buttons">
            <a
              type="button"
              href="https://acebook-team-earth.onrender.com/"
              target="_blank"
              rel="noreferrer"
              className="site-button"
            >
              Site
            </a>
            <a
              type="button"
              href="https://github.com/Super-robbin/acebook-team-earth"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={makersBnb} alt="MakersBnB" />
          <h3 className="project-name">MakersBnB</h3>
          <p className="project-description">
            Group project web app of an AirBnB clone
          </p>
          <div className="project-buttons">
            <a
              type="button"
              href="https://github.com/Super-robbin/acebook-team-earth"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={weather} alt="Weather" />
          <h3 className="project-name">Weather App</h3>
          <p className="project-description">
            A web app displaying current weather and weekly forecasts
          </p>
          <div className="project-buttons">
            <a
              type="button"
              href="https://weather-app-j4ac.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="site-button"
            >
              Site
            </a>
            <a
              type="button"
              href="https://github.com/Super-robbin/weather_app"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={notesApp} alt="NotesApp" />
          <h3 className="project-name">Notes App</h3>
          <p className="project-description">
            A web app to take notes, display and delete them
          </p>
          <div className="project-buttons">
            <a
              type="button"
              href="https://github.com/Super-robbin/notes_app"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={shopManager} alt="ShopManager" />
          <h3 className="project-name">Shop Manager</h3>
          <p className="project-description">
            A back-end shop manager project created with Python
          </p>
          <div className="project-buttons">
            <a
              type="button"
              href="https://github.com/Super-robbin/shop_manager_project_sql"
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              <img src={gitHub} alt="git-pic" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
