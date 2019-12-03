let env = process.env.NODE_ENV || "development";

require("dotenv").config({ path: `./.env.${env}` });

module.exports = {
  siteMetadata: {
    title: `Studio Legale Barberio`,
    author: `Laura Barberio`,
    description: `Ufficio Legale a Roma con Esperienza e Specializzazione nel Diritto dell'Immigrazione, nel diritto di Famiglia, Asilo Politico e Protezione Internazionale.`,
    siteUrl: `https://studiobarberio.netlify.com/`,
    social: {
      twitter: `https://twitter.com/laurabarberio`,
      facebook: `https://www.facebook.com/studiobarberio.org/`,
      linkedin: `https://it.linkedin.com/in/avv-laura-barberio-99156368`,
    },
    ufficio: {
      indirizzo: "Via del Casale Strozzi n. 31",
      city: "Roma",
      cap: "00195",
      telefono: "06 483694",
      telefono2: "06 48977102",
      fax: "06 45765396",
      email: "avvocatolaura@studiobarberio.org",
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Studio Legale Barberio`,
        short_name: `StudioBarberio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#701212`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
