import React from "react";
import styled from "styled-components";

// Animations
import Fade from "../Animations/Fade";

const Hero = ({ titleLeft, titleRight, descrizione }) => {
  return (
    <HeroHeader>
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
  min-height: 65vh !important;
  position: relative;
  margin-bottom: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media screen and (max-width: 769px) {
    min-height: 420px !important;
  }
  @media screen and (max-width: 480px) {
    min-height: 370px !important;
  }

  .bg-overlay {
    width: 100%;
    height: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 480px) {
      background: rgba(0, 0, 0, 0.3);
    }
  }

  .title_container {
    background: rgba(0, 0, 0, 0.4);
    max-width: 70%;
    padding: 10px;

    @media screen and (max-width: 480px) {
      max-width: 90%;
      padding: 5px;
      background: transparent;
    }
  }

  .hero-title {
    font-size: 2.6rem;

    @media screen and (max-width: 769px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.4rem;
    }
  }

  p {
    color: ${(props) => props.theme.white};
    font-size: 1rem;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
`;
