import React from "react";
import styled from "styled-components";
const Hero = ({ titleLeft, titleRight, descrizione }) => {
  return (
    <HeroHeader className="py-5 mb-5">
      <div className="bg-overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <h1 className="text-white mt-5 mb-2 hero-title">
                {titleLeft} <span>{titleRight}</span>
              </h1>
              <p
                className="mb-5 pr-5"
                style={{
                  maxWidth: "750px",
                  width: "100%",
                }}
              >
                {descrizione}
              </p>
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
  min-height: 50vh !important;
  position: relative;

  .bg-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }

  .hero-title {
    text-transform: uppercase;
    font-size: 3rem;

    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }

    span {
      color: ${props => props.theme.primaryColor};
    }
  }

  p {
    color: ${props => props.theme.white};
    font-size: 1.2rem;

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
`;
