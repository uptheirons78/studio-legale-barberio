import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const query = graphql`
  query {
    laura: markdownRemark(frontmatter: { templateKey: { eq: "laura-page" } }) {
      html
    }
    en_laura: markdownRemark(
      frontmatter: { templateKey: { eq: "en-laura-page" } }
    ) {
      html
    }
    sara: markdownRemark(frontmatter: { templateKey: { eq: "sara-page" } }) {
      html
    }
    en_sara: markdownRemark(
      frontmatter: { templateKey: { eq: "en-sara-page" } }
    ) {
      html
    }
    team: markdownRemark(frontmatter: { templateKey: { eq: "chi-siamo" } }) {
      frontmatter {
        members {
          collaboratori {
            descrizione
            email
            image
            imageAlt
            name
            occupazione
            telefono
          }
        }
      }
    }
  }
`;

const AboutPageAside = ({ lingua }) => {
  const data = useStaticQuery(query);
  const { collaboratori } = data.team.frontmatter.members;
  const lauraHtml = lingua === "IT" ? data.laura.html : data.en_laura.html;
  const saraHtml = lingua === "IT" ? data.sara.html : data.en_sara.html;

  console.log(collaboratori);

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
                      __html: lauraHtml,
                    }}
                  ></div>
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: saraHtml,
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
