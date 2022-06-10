import React from "react";
import "./Testimonials.scss";
import { Container } from "../../globalStyle";

import {
  TestiContainer,
  TestiSection,
  TestiText,
  TestiTextWrapper,
  TestiTitle,
  TestiWrapper,
} from "./TestimonialStyles";
import { TestimonialData } from "../../data/testimonials";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/pagination";

const Testimonials = () => {
  return (
    <TestiSection id="testimonials">
      <Container>
        <TestiTextWrapper>
          <TestiTitle>Testimonials</TestiTitle>
          <TestiText>What people say about me </TestiText>
        </TestiTextWrapper>
        <TestiWrapper>
          <TestiContainer>
            <Swiper
              className="testimonial__container"
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {TestimonialData.map(({ avatar, name, review }, id) => {
                return (
                  <SwiperSlide key={id} className="testimonial">
                    <div className="client__avatar">
                      <img className="client__img" src={avatar} alt="" />
                    </div>
                    <h5 className="client__name">{name}</h5>

                    <small className="client__review">{review}</small>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </TestiContainer>
        </TestiWrapper>
      </Container>
    </TestiSection>
  );
};

export default Testimonials;
