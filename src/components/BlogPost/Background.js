import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const query = graphql`
  query {
    imgArticoli: file(relativePath: { eq: "bg-articoli.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imgSentenze: file(relativePath: { eq: "bg-sentenze.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Background = ({ children, category }) => {
  const { imgArticoli, imgSentenze } = useStaticQuery(query);
  const img =
    category === "sentenza"
      ? imgSentenze.childImageSharp.fluid
      : imgArticoli.childImageSharp.fluid;

  return (
    <BackgroundImage Tag="section" fluid={img} className="background">
      {children}
    </BackgroundImage>
  );
};

export default Background;
