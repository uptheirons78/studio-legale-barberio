import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Blog/Background";
import Hero from "../components/Global/Hero";
import Card from "../components/Global/Card";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { title, heading, description } = data.markdownRemark.frontmatter;

  return (
    <Layout>
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
          <div className="col-md-12">
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            ></div>
          </div>
        </div>
        <h4 className="heading-2 mt-5">Articoli</h4>
        <hr className="mb-4" />
        <div className="row my-5">
          {posts.map(post => (
            <Card key={post.node.id} post={post.node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export const blogPageQuery = graphql`
  query BlogQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "blog-page" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "articolo" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
          }
          html
          frontmatter {
            title
            description
            date(formatString: "DD MMM YYYY", locale: "it")
            category
          }
        }
      }
    }
  }
`;
