import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import {
  Emaillink,
  EmailWrapper,
  FooterContainer,
  FooterCredit,
  Footertext,
  LeftSide,
  RightSide,
  SocialIconLink,
  SocialItem,
  SocialList,
  SvgIcon,
} from "./FooterStyle";
import GitHub from "./socialsIcon/github.svg";
import Instagram from "./socialsIcon/instagram.svg";
import Twitter from "./socialsIcon/twitter.svg";
import Linkedin from "./socialsIcon/linkedin.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <RightSide>
        <EmailWrapper>
          <Emaillink href="mailto:hello@muhammedhalaf.com">
            hello@muhammedhalaf.com
          </Emaillink>
        </EmailWrapper>
      </RightSide>

      <FooterCredit>
        <Footertext> Built by M.HALAF</Footertext>
      </FooterCredit>

      <LeftSide>
        <SocialList>
          <SocialItem>
            <SocialIconLink
              href="https://github.com"
              target="blank"
              aria-label="Github"
            >
              <SvgIcon src={GitHub} alt="Github Icon" />
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink
              href="https://www.instagram.com/"
              target="blank"
              aria-label="Instagram"
            >
              <SvgIcon src={Instagram} alt="Instagram Icon" />
            </SocialIconLink>
          </SocialItem>
          <SocialItem>
            <SocialIconLink
              href="https://www.linkedin.com/"
              target="blank"
              aria-label="LinkedIn"
            >
              <SvgIcon src={Linkedin} alt="Linkedin Icon" />
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink
              href="https://www.twitter.com/"
              target="blank"
              aria-label="Twitter"
            >
              <SvgIcon src={Twitter} alt="Twitter Icon" />
            </SocialIconLink>
          </SocialItem>
        </SocialList>
      </LeftSide>
    </FooterContainer>
  );
};

export default Footer;
