import { Container } from "../../globalStyle";
import {
  ContactSection,
  ContactWrapper,
  EmailLink,
  Text,
  Title,
} from "./ContactStyles";
import Form from "../Form/Form";

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <ContactWrapper>
          <Title>Get In Touch</Title>
          <Text>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Text>
          <EmailLink
            href="mailto:ittechtranss@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello
          </EmailLink>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};
