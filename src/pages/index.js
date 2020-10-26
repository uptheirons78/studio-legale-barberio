import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Home/Background";
import Hero from "../components/Global/Hero";
import Content from "../components/Home/Content";
import Aside from "../components/Home/Aside";
import Card from "../components/Global/Card";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

// Animations
import Fade from "../components/Animations/Fade";

const IndexPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter;
  const lingua = "IT";

  return (
    <Layout lingua={lingua}>
      <SEO
        title="Home"
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
          titleLeft={findTitleLeft(title)}
          titleRight={findTitleRight(title)}
          descrizione={description}
        />
      </Background>
      <div className="container">
        <Fade>
          <div className="row">
            <Content
              data={data}
              buttonText="Richiedi un appuntamento"
              lingua={lingua}
            />
            <Aside lingua={lingua} data={data.aside} />
          </div>
          <h4 className="heading-2">Decisioni recenti</h4>
          <hr className="mb-4" />
          <div className="row my-3">
            {data.allMarkdownRemark.edges.map((post) => (
              <Card key={post.node.id} post={post.node} />
            ))}
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const IndexPageQuery = graphql`
  query HomePageQuery {
    aside: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "aside" } } }
    ) {
      nodes {
        id
        frontmatter {
          IT {
            title
            first
            second
            third
            fourth
          }
          EN {
            title
            first
            second
            third
            fourth
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        heading
      }
      html
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "sentenza" } } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMM YYYY", locale: "it")
            category
          }
          id
          excerpt
          timeToRead
          fields {
            slug
          }
        }
      }
    }
  }
`;
