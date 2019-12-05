import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Privacy/Background";
import Hero from "../components/Global/Hero";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

const PrivacyPolicy = ({ data }) => {
  const { title, heading, description } = data.markdownRemark.frontmatter;
  return (
    <Layout lingua="IT">
      <SEO
        title={title}
        description={description}
        keywords={[
          `laura barberio`,
          `studio legale barberio`,
          `diritto immigrazione`,
          `asilo politico`,
          `protezione internazionale`,
          `gratuito patrocinio`,
          `diritto degli stranieri`,
        ]}
      />
      <Background>
        <Hero
          titleLeft={findTitleLeft(heading)}
          titleRight={findTitleRight(heading)}
          descrizione={description}
        />
      </Background>
      <div className="container">
        <div className="row">
          <Privacy
            className="col-md-12 my-5 text-justify"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

const Privacy = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.lightBlack};

  h4 {
    margin-bottom: 1rem;
    color: ${props => props.theme.black};
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.theme.lightBlack};
  }

  a {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
    transition: all 0.35s ease;

    &:hover {
      color: ${props => props.theme.secondaryColor};
    }

    &:hover strong {
      color: ${props => props.theme.secondaryColor};
    }
  }
`;

export const privacyQuery = graphql`
  query PrivacyPage {
    markdownRemark(frontmatter: { templateKey: { eq: "privacy-policy" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
