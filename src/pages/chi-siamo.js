import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
import Content from "../components/ChiSiamo/Content";
import AboutPageAside from "../components/ChiSiamo/Aside";
import { StudioStyledBackground } from "../components/Styles/StudioStyledBackground";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

// Animations
import Fade from "../components/Animations/Fade";

// Set Language
const lingua = "IT";

const ChiSiamoPage = ({ data }) => {
  const { title, heading, description } = data.markdownRemark.frontmatter;

  return (
    <Layout lingua={lingua}>
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
            <Content lingua={lingua} />
            <AboutPageAside lingua={lingua} />
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default ChiSiamoPage;

export const pageQuery = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { templateKey: { eq: "chi-siamo" } }) {
      frontmatter {
        title
        heading
        description
      }
    }
    banner: file(relativePath: { eq: "studio__banner-01.jpg" }) {
      publicURL
    }
    tabletBanner: file(relativePath: { eq: "studio__banner-ipad-01.jpg" }) {
      publicURL
    }
    mobileBanner: file(relativePath: { eq: "laura-home-mobile.jpg" }) {
      publicURL
    }
  }
`;
