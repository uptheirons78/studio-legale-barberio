import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
import Background from "../components/ChiSiamo/Background";
import Content from "../components/ChiSiamo/Content";
import AboutPageAside from "../components/ChiSiamo/Aside";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

const ChiSiamoPage = ({ data }) => {
  const { title, heading, description } = data.markdownRemark.frontmatter;
  const { collaboratori } = data.markdownRemark.frontmatter.members;
  const { html: lauraBody } = data.laura;
  const { html: saraBody } = data.sara;

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
          <Content data={data} />
          <AboutPageAside
            laura={lauraBody}
            sara={saraBody}
            collaboratori={collaboratori}
          />
        </div>
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
      html
    }
    laura: markdownRemark(frontmatter: { templateKey: { eq: "laura-page" } }) {
      html
    }
    sara: markdownRemark(frontmatter: { templateKey: { eq: "sara-page" } }) {
      html
    }
  }
`;
