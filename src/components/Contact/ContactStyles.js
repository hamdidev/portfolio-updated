import styled from "styled-components";

const mainColor = "#5c33a2";

export const ContactSection = styled.div`
  padding: 50px 0;
  position: relative;
  margin: 0 auto;
  min-height: 80vh;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
    margin-top: 10rem;
  }
`;
export const RightSide = styled.div``;

export const ContactWrapper = styled.div`
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1rem;
  padding: 30px;
`;

export const Title = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  color: ${mainColor};
  margin: 0px 0px 10px;
  font-weight: 600;
  line-height: 1.1;
`;

export const Text = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center;
  color: #717171;
  font-weight: 500;
  margin-bottom: 50px;
`;

export const EmailLink = styled.a`
  color: ${mainColor};
  background-color: transparent;
  border: 1px solid ${mainColor};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 50px;
  &:hover {
    background-color: ${mainColor};
    opacity: 0.8;
    border: none;
    color: white;
  }
`;
