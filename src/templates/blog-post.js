import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <small>{data.markdownRemark.frontmatter.date}</small>
        <p>{data.markdownRemark.frontmatter.description}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default BlogPost;

// Gatsby Query
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
      }
    }
  }
`;
