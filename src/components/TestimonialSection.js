import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import SectionTitle from "./SectionTitle";
import PText from "../components/PText";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import testimonial from "../assets/data/testimonials";

const TestimonialSectionStyle = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial_wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial_info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial_description {
    .para {
      text-align: center;
    }
  }
  .testimonial_name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2rem;
  }
  .testimonial_title {
    font-size: 1.66rem;
    margin-top: auto.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = testimonial[activeIndex];

  function handlePrev (){
    if (activeIndex <=0 ) {
        setActiveIndex(testimonial.length - 1)
    } else {
        setActiveIndex((oldIndex) => {
            oldIndex - 1
        })
    }
  }

  function handleNext (){
    if (activeIndex >= testimonial.length -1) {
        setActiveIndex(0)
    } else {
        setActiveIndex((oldIndex) => {
            oldIndex + 1
        })
    }
}

  return (
    <TestimonialSectionStyle>
      <div className="container">
        <SectionTitle
          Title="testimonial"
          subTitle="see what our clients say about us"
        />
        <div className="testimonial_wrapper">
          <SwitchTransition>
            <CSSTransition
                key={activeSlide.id}
                timeout={300}
                classNames="fade"
            >
              <div className="testimonial_info">
                <div className="testimonial_description">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial_name">{activeSlide.name}</h2>
                <p className="testimonial_title">
                  {activeSlide.title},<br />
                  {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialSectionStyle>
  );
}
