import React from "react";
import styled from "styled-components";

// Animations
// import SlideInFromLeft from "../Animations/SlideInFromLeft";
import Fade from "../Animations/Fade";

const Hero = ({ titleLeft, titleRight, descrizione }) => {
  return (
    <HeroHeader className="py-5 mb-5">
      <div className="bg-overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <Fade>
                <div className="title_container">
                  <h1 className="text-white mt-5 mb-2 hero-title">
                    {titleLeft.toUpperCase()}{" "}
                    <span style={{ color: "#701212" }}>
                      {titleRight.toUpperCase()}
                    </span>
                  </h1>
                  <p
                    className="mb-5 pr-5 hero-description"
                    style={{
                      maxWidth: "750px",
                      width: "100%",
                    }}
                  >
                    {descrizione}
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </HeroHeader>
  );
};

export default Hero;

const HeroHeader = styled.header`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 55vh !important;
  position: relative;

  .bg-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 480px) {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  .title_container {
    background: rgba(0, 0, 0, 0.3);
    max-width: 60%;
    padding: 10px;

    @media screen and (max-width: 769px) {
      max-width: 70%;
    }

    @media screen and (max-width: 480px) {
      background: transparent;
      max-width: 90%;
    }
  }

  .hero-title {
    font-size: 2.6rem;

    @media screen and (max-width: 769px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.4rem;
    }
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 1rem;

    @media screen and (max-width: 900px) {
      font-size: 1rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
`;
