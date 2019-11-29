import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Sentenze = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  console.log(posts);

  return (
    <Layout>
      <SEO title="Sentenze" />
      <h1>Hi from the sentenze page</h1>
      <p>Welcome to sentenze page</p>
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

export default Sentenze;

export const SentenzePageQuery = graphql`
  query SentenzeQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "sentenza" } } }
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
