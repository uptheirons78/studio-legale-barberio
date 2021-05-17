import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Hero from "../../components/Global/Hero";
import Content from "../../components/ChiSiamo/Content";
import AboutPageAside from "../../components/ChiSiamo/Aside";
import { StudioStyledBackground } from "../../components/Styles/StudioStyledBackground";

// Animations
import Fade from "../../components/Animations/Fade";

// Utils
import { findTitleLeft, findTitleRight } from "../../utils/title";

// Set Language
const lingua = "EN";

const ChiSiamoPage = ({ data }) => {
  const { title, heading, description } = data.english_mark.frontmatter;

  return (
    <Layout lingua={lingua}>
      <SEO
        lang="en"
        title={title}
        description={description}
        keywords={[
          `laura barberio`,
          `studio legale barberio`,
          `immigration law`,
          `political asylum`,
          `international protection`,
          `free legal aid`,
          `foreigners and refugees law`,
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

export const AboutUsPageQuery = graphql`
  query AboutUsQuery {
    english_mark: markdownRemark(
      frontmatter: { templateKey: { eq: "about-us" } }
    ) {
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
