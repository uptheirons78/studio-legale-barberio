import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Privacy/Background";
import Hero from "../components/Global/Hero";
import { Covid } from "../components/Styles/StyledCovid";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

// Animations
import Fade from "../components/Animations/Fade";

const CovidPage = ({ data }) => {
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

export default CovidPage;

export const covidQuery = graphql`
  query covidPage {
    markdownRemark(frontmatter: { templateKey: { eq: "covid" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
