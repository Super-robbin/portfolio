import logo from "../../images/logo-r.png";

const Header = () => {
  return (
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
        <a href="../../../public/CV.pdf" target="_blank" rel="noreferrer">
          <button className="btn-resume">Resume</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;