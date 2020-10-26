import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Background from "../../components/Home/Background";
import Hero from "../../components/Global/Hero";
import Content from "../../components/Home/Content";
import Aside from "../../components/Home/Aside";
import Card from "../../components/Global/Card";

// Utils
import { findTitleLeft, findTitleRight } from "../../utils/title";

// Animations
import Fade from "../../components/Animations/Fade";

const EnIndexPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter;
  const lingua = "EN";

  return (
    <Layout lingua={lingua}>
      <SEO
        lang="en"
        title="Home"
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
            <Content data={data} buttonText="Get in touch" lingua={lingua} />
            <Aside lingua={lingua} data={data.aside} />
          </div>
          <h4 className="heading-2">Latest Verdicts</h4>
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

export default EnIndexPage;

export const EnglishIndexPageQuery = graphql`
  query EnglishHomePageQuery {
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
    markdownRemark(frontmatter: { templateKey: { eq: "en-index-page" } }) {
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
