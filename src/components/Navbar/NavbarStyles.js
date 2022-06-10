import styled from "styled-components";
import { Container } from "../../globalStyle";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  margin-bottom: -80px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
`;

export const NavLogo = styled.a`
  color: #141e27;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 99;
`;

export const NavIcon = styled.img`
  margin-right: 0.2rem;
  width: 3rem;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 99;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #8e99d7;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.a`
  color: #141e27;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Rubik", sans-serif;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: capitalize;

  &:hover {
    border-bottom: 2px solid #5c33a2;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      border-bottom: none;
      color: #5c33a2;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
