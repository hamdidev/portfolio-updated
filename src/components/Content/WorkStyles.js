import styled from "styled-components";
export const WorkContent = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  grid-auto-flow: dense;
  /* Media Queries */
  @media screen and (min-width: 576px) {
    grid-template-columns: 482px;
    justify-content: center;
  }
  @media screen and (min-width: 776px) {
    grid-template-columns: repeat(2, 372px);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 332px);
  }
`;

export const WorkModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -100%;
  left: 0;
  background: linear-gradient(
    180deg,
    hsla(207, 24%, 40%, 0.3) 0%,
    hsla(207, 24%, 4%, 0.4) 95%
  );
  display: grid;
  align-items: flex-end;
  border-radius: 0.5rem;
  padding: 10px;
  transition: 0.3s ease-in-out;
`;

export const WorkCard = styled.article`
  position: relative;
  overflow: hidden;

  border-radius: 0.5rem;

  &:hover ${WorkModal} {
    bottom: 0;
  }
`;

export const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: 0.3s ease-in-out;
`;

export const WorkSubtitle = styled.span`
  color: #fff;
  font-size: 14px;
`;
export const WorkTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 0.7rem;
  margin-top: 0.3rem;
  letter-spacing: 1px;
`;
export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WorkBtn = styled.button``;
export const GitHubLink = styled.a`
  cursor: pointer;
  color: #fff;
`;
export const ExternalLink = styled.a`
  cursor: pointer;
`;
