import styled from "styled-components";
const mainColor = "#5c33a2";

export const FooterContainer = styled.div`
  padding: 2rem 0 1rem 0;
  /* display: flex;
  justify-content: space-between; */
  width: 100%;
  overflow-x: hidden;
`;

export const RightSide = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 20px;
  z-index: 10;
  color: ${mainColor};
  height: 45%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: ${mainColor};
  }
`;
export const Emaillink = styled.a`
  margin: 10px auto;
  padding: 10px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  text-decoration: none;
  color: ${mainColor};
`;

export const LeftSide = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 20px;
  right: auto;
  z-index: 10;
  color: ${mainColor};
  height: 30%;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 10px auto 50px;
    position: relative;
    left: 0;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;

  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  //margin-bottom: 10px;
  list-style: none;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }

  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: ${mainColor};
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const SocialItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  margin: 7px auto;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 18px;
`;
export const SvgIcon = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  width: 20px;
  height: 20px;
`;
export const FooterCredit = styled.div`
  text-align: center;
  bottom: 0;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0px auto 10px;
    text-align: center;
    position: relative;
    bottom: -77px;
  }
`;
export const Footertext = styled.p`
  color: ${mainColor};
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 13px;
  line-height: 1;
`;
