import React from "react";
import { Container } from "../../globalStyle";
import {
  ClientSection,
  ClientColumn,
  ClientText,
  ClientTitle,
  ClientRow,
  ClientWrapper,
  ClientImage,
  ClientTextWrapper,
} from "./SkillsStyles";
import { clientsData } from "../../data/ClientsData";

const Clients = () => {
  return (
    <ClientSection id="skills">
      <Container>
        <ClientTextWrapper>
          <ClientTitle>My Skills</ClientTitle>
          <ClientText>I’ve been working with these technologies.</ClientText>
        </ClientTextWrapper>

        <ClientRow>
          {clientsData.map((clients, clientsIndex) => (
            <ClientColumn key={clientsIndex}>
              {clients.map((el, index) => (
                <ClientWrapper key={index}>
                  <ClientImage src={`./images/companies/${el.name}.svg`} />
                </ClientWrapper>
              ))}
            </ClientColumn>
          ))}
        </ClientRow>
      </Container>
    </ClientSection>
  );
};

export default Clients;
