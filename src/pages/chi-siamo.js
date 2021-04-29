import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
// import Background from "../components/ChiSiamo/Background";
import Content from "../components/ChiSiamo/Content";
import AboutPageAside from "../components/ChiSiamo/Aside";

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
      <div
        style={{
          backgroundImage: `url(${data.banner.publicURL})`,
          backgroundPosition: `top center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <Hero
          titleLeft={findTitleLeft(heading)}
          titleRight={findTitleRight(heading)}
          descrizione={description}
        />
      </div>
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
    banner: file(relativePath: { eq: "laura-home-banner-4.jpg" }) {
      publicURL
    }
  }
`;
