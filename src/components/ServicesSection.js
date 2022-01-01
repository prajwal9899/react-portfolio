import React from "react";
import styled from "styled-components";
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import ServicesSectionItems from "./ServicesSectionItems";

const ServicesSectionStyle = styled.div`
  padding: 10rem 0;
  .services_allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services_allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesSectionStyle>
      <div className="container">
        <SectionTitle subTitle="what i will do for you" Title="services" />
        <div className="services_allItems">
          <ServicesSectionItems
            icon={<MdDesktopMac />}
            title="Website Design "
            //   description=""
          />

          <ServicesSectionItems
            icon={<MdCode />}
            title="Web Dev"
            //   description=""
          />

          <ServicesSectionItems
            icon={<MdPhonelinkSetup />}
            title="App Dev"
            //   description=""
          />
        </div>
      </div>
    </ServicesSectionStyle>
  );
}
