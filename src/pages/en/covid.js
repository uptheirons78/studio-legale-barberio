import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Hero from "../../components/Global/Hero";
import { Covid } from "../../components/Styles/StyledCovid";
import { StudioStyledBackground } from "../../components/Styles/StudioStyledBackground";

// Utils
import { findTitleLeft, findTitleRight } from "../../utils/title";

// Animations
import Fade from "../../components/Animations/Fade";

const CovidEnglishPage = ({ data }) => {
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
            <Covid
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

export default CovidEnglishPage;

export const covidENQuery = graphql`
  query covidENPage {
    markdownRemark(frontmatter: { templateKey: { eq: "en-covid" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
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
