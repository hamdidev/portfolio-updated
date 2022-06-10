import styled from "styled-components";

export const TestiContainer = styled.section`
  //padding-top: 150px;
  height: 70vh;
  width: 45%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 200px) {
    width: 100%;
  }

  padding-top: 81px;
`;
export const TestiSection = styled.div`
  //padding: 140px 0;
  position: relative;
  margin: 0 auto;
  height: 100vh;
  padding-top: 80px;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;

export const TestiWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TestiTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 3rem;
  //padding-top: 400px;

  &:before {
    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: #5348a7;
    transform: translateX(-50%);
  }
`;

export const TestiTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  @media screen and (max-width: 466px) {
    font-size: clamp(1.3rem, 13vw, 2.4rem);
  }
`;

export const TestiText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;
