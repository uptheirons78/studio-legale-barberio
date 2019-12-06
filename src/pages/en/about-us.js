import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Hero from "../../components/Global/Hero";
import Background from "../../components/ChiSiamo/Background";
import Content from "../../components/ChiSiamo/Content";
import AboutPageAside from "../../components/ChiSiamo/Aside";

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
          <Content lingua={lingua} />
          <AboutPageAside lingua={lingua} />
        </div>
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
  }
`;
