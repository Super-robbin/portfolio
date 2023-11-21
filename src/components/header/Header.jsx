import logo from "../../images/logo-r.png";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-name">
        <img className="logo" src={logo} alt="logo" id="logo" />
        <p className="header-name">Roberto</p>
      </div>
      <nav className="nav-bar">
        <Navigation />
        <MobileNavigation />
      </nav>
    </header>
  );
};

export default Header;
