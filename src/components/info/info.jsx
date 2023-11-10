
const Info = () => {
  return (
    <header className="header">
      <div>
        <p className="header-name">Roberto Quadraccia</p>
      </div>
      <nav className="nav-bar">
        <ul className="nav-bar-list">
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
      </nav>
      <button className="btn-resume">Resume</button>
    </header>
  );
};

export default Info;