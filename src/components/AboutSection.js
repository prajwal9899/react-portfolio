import React from "react";
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import aboutImg from "../assets/images/about-sec-img.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .about_Section_left,
  .about_section_right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .about_section_buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .about_Section_left {
      flex: 4;
    }
    .about_section_right {
      flex: 3;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .about_Section_left,
    .about_section_right {
      width: 100%;
    }
    .about_section_right {
      margin-top: 3.3rem;
    }
    .section-title{
        text-align: center;
    }
    .para{
        margin: 0 auto;
        margin-top: 2rem;
    }
    .about_section_buttons{
        flex-direction: column;
        gap: 0;
        .button_wrapper,a{
            width: 100%;
            text-align: center;
        }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="about_Section_left">
          <SectionTitle subTitle="Let me introduce myself" Title="about me" />
          <PText>
            I am a freelancer web designer and developer from Nagpur,
            Maharashtra. I create professional websites . I love design and try
            to show unique views to the audience through my design.
          </PText>
          <div className="about_section_buttons">
            <Button btnLink="/projects" btnText="Works" outline={false} />
            <Button btnLink="/about" btnText="Read More" />
          </div>
        </div>
        <div className="about_section_right">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
