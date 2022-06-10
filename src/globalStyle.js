import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const TextWrapper = styled.div`
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
    background-color: #ef4b6c;
    transform: translateX(-50%);
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
`;

export const Text = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #626881;
`;

export const Section = styled.div`
  color: #fff;
  padding: 160px 0;
`;

export const Heading = styled.h2`
  margin-bottom: 1.4rem;
  font-size: 3rem;
  text-align: center;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export default GlobalStyle;
