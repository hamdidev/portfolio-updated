import React from "react";
import { Container } from "../../globalStyle";

import {
  FeatureText,
  FeatureSection,
  FeatureTitle,
  FeatureTextWrapper,
  AboutContainer,
  AboutImg,
  ImgWrapper,
  AboutTextWrapper,
  AboutSpan,
  SkillList,
  Skill,
  TextWrapper,
  AboutImgContainer,
} from "./AboutStyle";

import { featuresData } from "../../data/FeaturesData";

const About = () => {
  return (
    <FeatureSection id="about">
      <Container>
        <FeatureTextWrapper>
          <FeatureTitle>About me</FeatureTitle>
        </FeatureTextWrapper>
        <AboutContainer>
          <AboutTextWrapper>
            <AboutSpan>Innovate. Design. Build.</AboutSpan>
            <TextWrapper>
              <FeatureText>
                Hi! 👋 I'm Muhammed, a front end developer with 3.5+ years of
                experience in web dev freelancing, based in Turkey. I enjoy
                creating things that live on the internet, whether that be
                websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect and performant
                experiences. Here are a few technologies I've been working with
                recently:
                <SkillList>
                  <Skill>HTML & (S)CSS</Skill>
                  <Skill>JavaScript (ES6+)</Skill>
                  <Skill>React</Skill>
                  <Skill>WordPress</Skill>
                  <Skill>Node.js</Skill>
                  <Skill>Next.js</Skill>
                  <Skill>Tailwind-css</Skill>
                </SkillList>
              </FeatureText>
            </TextWrapper>
          </AboutTextWrapper>
          <AboutImgContainer>
            <ImgWrapper>
              <AboutImg src="/images/timo.png" alt="My photo" />
            </ImgWrapper>
          </AboutImgContainer>
        </AboutContainer>
      </Container>
    </FeatureSection>
  );
};

export default About;
