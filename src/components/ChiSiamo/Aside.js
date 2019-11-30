import React from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const AboutPageAside = ({ collaboratori, laura, sara }) => {
  return (
    <div className="col-md-4 px-3 pl-2">
      <h4 className="heading-2">Team Members</h4>
      <hr />
      {collaboratori.map(collaboratore => {
        return (
          <Widget
            key={collaboratore.name}
            className="row sidebar-widget px-3 mb-5"
          >
            <div className="card">
              <div className="card-body">
                <img
                  src={collaboratore.image}
                  alt={collaboratore.imageAlt}
                  className="img-fluid rounded mx-auto d-block"
                  style={{ maxWidth: "120px" }}
                />
                <h5 className="text-center mt-2">{collaboratore.name}</h5>
                <p className="text-muted text-center mb-2">
                  {collaboratore.occupazione}
                </p>

                {collaboratore.name === "Laura Barberio" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: laura,
                    }}
                  ></div>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: sara,
                    }}
                  ></div>
                )}
                <hr />
                <div className="info-section">
                  <p className="info-item">
                    <span className="mr-1">
                      <FaPhone />
                    </span>{" "}
                    {collaboratore.telefono}
                  </p>
                  <p className="info-item">
                    <span className="mr-1">
                      <FaEnvelope />
                    </span>{" "}
                    {collaboratore.email}
                  </p>
                </div>
              </div>
            </div>
          </Widget>
        );
      })}
    </div>
  );
};

export default AboutPageAside;

const Widget = styled.div`
  text-align: justify;

  h5 {
    color: ${props => props.theme.black};
  }

  p {
    color: ${props => props.theme.lighBlack};
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  strong,
  a {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }
`;
