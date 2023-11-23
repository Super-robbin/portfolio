const NavLinks = (props) => {
  return (
    <ul className="nav-bar-list">
      <li
        className="nav-bar-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className="nav-bar-link" href="#about">
          About Me
        </a>
      </li>
      <li
        className="nav-bar-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className="nav-bar-link" href="#project">
          Projects
        </a>
      </li>
      <li
        className="nav-bar-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a className="nav-bar-link" href="#contact">
          Contact
        </a>
      </li>
      <li
        className="nav-bar-item"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/CV.pdf" target="_blank" rel="noreferrer">
          <button className="btn-resume" id="btn-resume">
            Resume
          </button>
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
