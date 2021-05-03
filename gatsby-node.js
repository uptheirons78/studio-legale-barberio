const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

async function makePostsFromMarkdown({ graphql, actions }) {
  const postTemplate = path.resolve(`./src/templates/blog-post.js`);
  const { errors, data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (errors) {
    console.log(errors);
    throw new Error(`There was an error`);
  }

  const posts = data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const id = post.node.id;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    actions.createPage({
      path: `/blog${post.node.fields.slug}`,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        id,
        previous,
        next,
        collection: "blog",
        pathPrefix: "/blog",
      },
    });
  });
}

async function makeLandingPagesFromMarkdown({ graphql, actions }) {
  const landingPageTemplate = path.resolve(`./src/templates/landing-pages.js`);
  const { errors, data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "landing-page" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (errors) {
    console.log(errors);
    throw new Error(`There was an error`);
  }

  const landingPages = data.allMarkdownRemark.edges;

  landingPages.forEach((landingPage, index) => {
    const id = landingPage.node.id;
    actions.createPage({
      path: `${landingPage.node.fields.slug}`,
      component: landingPageTemplate,
      context: {
        slug: landingPage.node.fields.slug,
        id,
        collection: "landing",
        pathPrefix: "/",
      },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  await Promise.all([
    makePostsFromMarkdown({ graphql, actions }),
    makeLandingPagesFromMarkdown({ graphql, actions }),
  ]);
};

/**
 *
 * Version 1.0
 */

/*
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `blog${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

*/

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    // Added in version 2.0
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};
