import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles";
import { navbarData } from "../../data/NavbarData";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (id) => {
    scrollTo(id);

    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/">
            <NavIcon src="./images/logo.png" alt="" />
          </NavLogo>
          <MobileIcon onClick={() => setShow(!show)}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu show={show}>
            {["about", "skills", "work", "testimonials", "contact"].map(
              (item) => (
                <NavItem key={item}>
                  <NavLinks onClick={() => setShow(false)} href={`#${item}`}>
                    {item}
                  </NavLinks>
                </NavItem>
              )
            )}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
