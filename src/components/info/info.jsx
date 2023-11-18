import linkedIn from "../../images/Linkedin.svg";
import gitHub from "../../images/Github.svg";
import instagram from "../../images/Instagram.svg";
import logo from "../../images/logo-r.png";
import profile from "../../images/profile-2.png"

const Info = () => {
  return (
    <div className="container-info">
      <header className="header">
        <div className="header-logo-name">
          <img className="logo" src={logo} alt="logo" id="logo" />
          <p className="header-name">Roberto</p>
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
          <a href="../../../public/CV.pdf" target="_blank"
              rel="noreferrer">
            <button className="btn-resume">Resume</button>
          </a>
        </nav>
      </header>
      <main className="main">
        <div className="name-section">
          <p className="above-section">
            <span className="dash">-</span>
            my name is
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
              <a href="https://www.linkedin.com/in/roberto-quadraccia/" target="_blank"
              rel="noreferrer">
                <img src={linkedIn} alt="linkedIn-pic" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/Super-robbin" target="_blank"
              rel="noreferrer">
                <img src={gitHub} alt="git-pic" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.instagram.com/super_robbin/" target="_blank"
              rel="noreferrer">
                <img src={instagram} alt="insta-pic" />
              </a>
            </li>
          </ul>
        </div>
        <div className="main-photo-box">
          <img className="profile-img" src={profile} alt="profile-img"/>
        </div>
      </main>
    </div>
  );
};

export default Info;
