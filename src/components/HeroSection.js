import React from "react";
import HeroImg from "../assets/images/hero.png";
import socailImage from "../assets/images/social-media-arrow.svg";
import scrollImage from "../assets/images/scroll-down-arrow.svg";
import Button from "../components/Button";
import PText from "../components/PText";
import styled from "styled-components";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero_heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span{
      display: inline-block;
      width: 100%;
    }
    .hero_name{
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero_img{
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero_info {
    margin-top: -18rem;

  }
  .hero_social,.hero_scrollDown{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero_social {
    left: 50px;
  }
  .hero_scrollDown {
    right: 50px;
  }
  .hero_social_indicator,.hero_scrollDown{
    width: 50px;
    p{
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: .7rem;
      text-transform: uppercase;
    }
    img{
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }.hero_scrollDown{
    .img{
      max-height: 70px;
    }
  }
  .hero_social_text{
    ul{
      li{
        margin-bottom: 1rem;
      }
      a{
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero{
      min-height: 750px;
    }
    .hero_heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero_name {
        font-size: 4.5rem;
      }
    }
    .hero_img{
      height: 300px;
    }
    .hero_info {
      margin-top: 3rem;
    }
    .hero_social{
      left: 0;
      bottom: 15%;
      width: 20px;
      .hero_social_indicator{
        width: 20px;
        p{
          font-size: 1.2rem;
        }
        img{
          max-height: 22px;
        }
      }
      .hero_social_text{
        ul{
          li{
            a{
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero_scrollDown{
      right: 0;
      width: 20px;
      gap: 1rem;
      p{
        font-size: 1.3rem;
      }
    }
  }
`;
export default function Home() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero_heading">
            <span>Hello, This is </span>
            <span className="hero_name">Prajwal Gadge</span>
          </h1>
          <div className="hero_img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero_info">
            <PText>
              I am working as a freelancer web designer and developer. I love to
              design and make new web experiences for the people.
            </PText>
            <Button btnLink="/projects" btnText="See my work" outline={false} />
          </div>
          <div className="hero_social">
            <div className="hero_social_indicator">
              <p>Follow</p>
              <img src={socailImage} alt="" />
            </div>
            <div className="hero_social_text">
             <ul>
             <li>
                <a href="/" target="_blank" rel="norefferrer">
                  FB
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="norefferrer">
                  IG
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="norefferrer">
                  TW
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="norefferrer">
                  LN
                </a>
              </li>
             </ul>
            </div>
          </div>
          <div className="hero_scrollDown">
            <p>Scroll</p>
            <img src={scrollImage} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
