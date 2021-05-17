import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
import { StudioStyledBackground } from "../components/Styles/StudioStyledBackground";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

// Animations
import Fade from "../components/Animations/Fade";

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
      <StudioStyledBackground
        banner={data.banner.publicURL}
        tabletBanner={data.tabletBanner.publicURL}
        mobileBanner={data.mobileBanner.publicURL}
      >
        <Hero
          titleLeft={findTitleLeft(heading)}
          titleRight={findTitleRight(heading)}
          descrizione={description}
        />
      </StudioStyledBackground>
      <div className="container">
        <Fade>
          <div className="row">
            <Privacy
              className="col-md-12 my-5 text-justify"
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            />
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;

const Privacy = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.lightBlack};

  h4 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.black};
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightBlack};
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
    transition: all 0.35s ease;

    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }

    &:hover strong {
      color: ${(props) => props.theme.secondaryColor};
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
    banner: file(relativePath: { eq: "laura-contatti-banner-01.jpg" }) {
      publicURL
    }
    tabletBanner: file(relativePath: { eq: "laura-contatti-banner-01.jpg" }) {
      publicURL
    }
    mobileBanner: file(relativePath: { eq: "laura-contatti-banner-01.jpg" }) {
      publicURL
    }
  }
`;
