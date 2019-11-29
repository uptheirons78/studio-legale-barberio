import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LibroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      libroImage: file(relativePath: { eq: "diritto-stranieri.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{ width: "160px", border: "1px solid rgba(0, 0, 0, 0.2)" }}
      fluid={data.libroImage.childImageSharp.fluid}
    />
  );
};

export default LibroImage;
