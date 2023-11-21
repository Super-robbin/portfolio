import NavLinks from "./NavLinks";
import { HiMenu } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <HiMenu className="hamburger-icon" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <CgCloseO className="close-icon" onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
