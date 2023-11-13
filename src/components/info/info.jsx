import linkedIn from "../../images/Linkedin.svg";
import gitHub from "../../images/Github.svg";
import instagram from "../../images/Instagram.svg";

const Info = () => {
  return (
    <div className="container-info">
      <header className="header">
        <div>
          <p className="header-name">Roberto Quadraccia</p>
        </div>
        <nav className="nav-bar">
          <ul className="nav-bar-list">
            <li className="nav-bar-item">
              <a className="nav-bar-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-bar-item">
              <a className="nav-bar-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-bar-item">
              <a className="nav-bar-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn-resume">Resume</button>
        </nav>
      </header>
      <main className="main">
        <div className="name-section">
          <p className="above-section">
            <span>- </span>
            my name
          </p>
          <h1 className="name-section-title">
            Roberto
            <span className="name-section-title-span"> Quadraccia</span>
          </h1>
          <p className="name-section-description">
            Creative full-stack developer with 1 year of experience. Proficient
            in Python, Javascript (MERN stack) and SQL.
          </p>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/roberto-quadraccia/">
                <img src={linkedIn} alt="linkedIn-pic" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/Super-robbin">
                <img src={gitHub} alt="git-pic" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.instagram.com/super_robbin/">
                <img src={instagram} alt="insta-pic" />
              </a>
            </li>
          </ul>
        </div>
        <div className="main-photo-box"></div>
      </main>
    </div>
  );
};

export default Info;