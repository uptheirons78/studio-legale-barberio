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

// Animations
import Fade from "../components/Animations/Fade";
import { StudioStyledBackground } from "../components/Styles/StudioStyledBackground";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
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
            {posts.map((post) => (
              <Card key={post.node.id} post={post.node} />
            ))}
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default Blog;

export const blogPageQuery = graphql`
  query BlogQuery {
    banner: file(relativePath: { eq: "studio__banner-01.jpg" }) {
      publicURL
    }
    tabletBanner: file(relativePath: { eq: "studio__banner-ipad-01.jpg" }) {
      publicURL
    }
    mobileBanner: file(relativePath: { eq: "laura-home-mobile.jpg" }) {
      publicURL
    }
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
