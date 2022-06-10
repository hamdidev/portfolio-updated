import React from "react";
import {
  LinksContainer,
  ExternalLink,
  WorkCard,
  WorkImage,
  WorkModal,
  WorkSubtitle,
  WorkTitle,
  GitHubLink,
  WorkContent,
} from "./WorkStyles";
import "./Work.scss";
import { Container } from "../../globalStyle";
import {
  ClientTextWrapper,
  ClientTitle,
  ClientText,
} from "../Skills/SkillsStyles";
import { WorkData } from "../../data/WorkData";
import { ClientSection } from "../Skills/SkillsStyles";
const Work = () => {
  return (
    <ClientSection id="work">
      <Container>
        <ClientTextWrapper>
          <ClientTitle>Recent Works</ClientTitle>
          <ClientText>I’ve been working with these technologies.</ClientText>
        </ClientTextWrapper>
        <WorkContent>
          {WorkData.map((work, index) => (
            <WorkCard key={index}>
              <WorkImage src={work.image} />
              <WorkModal>
                <div>
                  <WorkSubtitle>{work.subtitle}</WorkSubtitle>
                  <WorkTitle>{work.title}</WorkTitle>
                  <LinksContainer>
                    <GitHubLink target="_blank" href={work.githubLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-github"
                        width="25px"
                        height="25px"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </GitHubLink>
                    <ExternalLink target="_blank" href={work.externalLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                        width="25px"
                        height="25px"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </ExternalLink>
                  </LinksContainer>
                </div>
              </WorkModal>
            </WorkCard>
          ))}
        </WorkContent>
      </Container>
    </ClientSection>
  );
};

export default Work;
