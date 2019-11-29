import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LauraImage = () => {
  const data = useStaticQuery(graphql`
    query {
      lauraImage: file(relativePath: { eq: "laura.jpg" }) {
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
      style={{ width: "160px" }}
      fluid={data.lauraImage.childImageSharp.fluid}
    />
  );
};

export default LauraImage;
