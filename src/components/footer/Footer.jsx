import linkedIn from "../../images/Linkedin.svg";
import gitHub from "../../images/Github.svg";
import instagram from "../../images/Instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="social-list" id="social-list">
        <li className="social-item" id="social-item">
          <a
            href="https://www.linkedin.com/in/roberto-quadraccia/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn-pic" />
          </a>
        </li>
        <li className="social-item" id="social-item">
          <a
            href="https://github.com/Super-robbin"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHub} alt="git-pic" />
          </a>
        </li>
        <li className="social-item" id="social-item">
          <a
            href="https://www.instagram.com/super_robbin/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="insta-pic" />
          </a>
        </li>
      </ul>
      <p className="footer-copyright">© 2023 - Roberto Quadraccia</p>
    </div>
  );
};

export default Footer;
