import styled from "styled-components";

export const FeatureSection = styled.div`
  padding: 140px;
  position: relative;
  margin: 0 auto;

  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;
export const AboutContainer = styled.div`
  /* display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.5rem;
  gap: 50px; */

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const AboutImgContainer = styled.div`
  position: relative;
  max-width: 300px;
  display: block;
`;
export const ImgWrapper = styled.div`
  transition: all 0.2s ease;
  display: block;
  position: relative;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0);
  }
`;
export const AboutImg = styled.img`
  position: relative;
  border-radius: 10px;
  mix-blend-mode: multiply;
  transition: all 0.3s ease;
  width: 300px;
`;

export const AboutTextWrapper = styled.div`
  position: relative;
  margin: 1rem auto;
`;

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
`;
export const AboutSpan = styled.h2`
  color: #456268;
  text-align: initial;
  margin-bottom: 1rem;
  word-spacing: 5px;
  font-size: 1.5rem;
`;
export const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
  font-size: 13px;
`;
export const Skill = styled.li`
  position: relative;
  padding-left: 1rem;
  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    top: -8px;
    color: goldenrod;
    font-size: 1.4rem;
  }
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;

  &:before {
    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: #5c33a2;
    transform: translateX(-50%);
  }
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* flex-wrap: wrap; */
  margin-top: 4rem;
  grid-gap: 4rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.4rem;
    grid-row-gap: 3rem;
    /* grid-gap: 3rem; */
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled.div`
  /* max-width: 33%; */
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    /* max-width: 50%; */
  }
`;

export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  text-align: justify;
  font-size: 1rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: "#626881";
  font-weight: 400;

  @media screen and (max-width: 768px) {
    //display: none;
  }
`;
export const TextWrapper = styled.div`
  font-size: 18px;
  line-height: 26px;
  text-decoration: none solid rgb(136, 146, 176);
  word-spacing: 0px;
  height: 387px;
  width: 510px;
  display: block;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  @media screen and (max-width: 1200px) {
    width: 400px;
    margin-right: 50px;
  }
  @media screen and (max-width: 960px) {
    width: 510px;
  }
  @media screen and (max-width: 768px) {
    width: 330px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 380px) {
    width: 280px;
    padding: 5px;
    margin-left: 10px;
    margin-bottom: 50px;
  }
`;
