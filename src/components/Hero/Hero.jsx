import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  ImageCharacter,
  HeroImage,
  HeroContent,
  ButtonWrapper,
  CharacterContainer,
  HeroContainer,
  TextContainer,
  LandingContainer,
} from "./HeroStyle";
import { useInView } from "react-intersection-observer";
import Modal from "../Modal/Modal";
import Landing from "../Landing/Landing";
import { Container } from "../../globalStyle";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
  };

  const variants = {
    hover: {
      y: 15,
      transition: {
        yoyo: Infinity,
        duration: 0.6,
      },
    },
  };
  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <>
      <HeroSection id="home">
        <Container>
          <HeroContent>
            <HeroContainer>
              <LandingContainer>
                <Landing />
              </LandingContainer>
              <TextContainer>
                <Heading>
                  Building Innovative websites that capture users
                </Heading>
                <HeroText>
                  A passionate developer and designer ready to provide unique
                  and outstanding products for you!
                </HeroText>
              </TextContainer>
            </HeroContainer>
            <ButtonContainer ref={ref}>
              <ButtonWrapper>
                <HeroButton
                  onClick={toggleModal}
                  className={inView ? "" : "corner"}
                >
                  {inView ? (
                    <> Chat with me</>
                  ) : (
                    <FiMail color="white" size="2.3rem" />
                  )}
                </HeroButton>
              </ButtonWrapper>
            </ButtonContainer>
          </HeroContent>
        </Container>
      </HeroSection>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Hero;
