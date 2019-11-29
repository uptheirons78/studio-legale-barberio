import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  console.log(posts);

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the blog page</h1>
      <p>Welcome to blog page</p>
      <div style={{ marginTop: "10vh" }}>
        <ul>
          {posts.map(post => (
            <li key={post.node.id}>
              <Link to={`/blog/${post.node.fields.slug}`}>
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Blog;

export const blogPageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "articolo" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          frontmatter {
            title
            description
            date
            category
          }
        }
      }
    }
  }
`;
