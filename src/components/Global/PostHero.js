import React from "react";
import styled from "styled-components";

// Animation
import Fade from "../Animations/Fade";

const HeroPost = ({ title, date }) => {
  return (
    <HeroHeader className="py-5 mb-5">
      <div className="bg-overlay">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12">
              <div
                style={{
                  maxWidth: "900px",
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                <Fade>
                  <h1 className="text-white mt-5 mb-2 hero-title">{title}</h1>
                  <p>Pubblicato il {date}</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroHeader>
  );
};

export default HeroPost;

const HeroHeader = styled.header`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 45vh !important;
  position: relative;

  .bg-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(112, 18, 18, 0.92);
    position: absolute;
    top: 0;
    left: 0;
  }

  .hero-title {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;

    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 1.4rem;
    }

    span {
      color: ${props => props.theme.primaryColor};
    }
  }

  p {
    color: ${props => props.theme.white};
    font-size: 1.2rem;
    font-weight: 500;

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
`;
