import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

export default function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(relativePath: { eq: "laura.jpg" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            facebook
          }
        }
      }
    }
  `);
  const { author, social } = data.site.siteMetadata;

  return (
    <StyledBio className="my-3">
      <Image
        className="author-image"
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
          transform: `rotate(45deg)`,
        }}
      />
      <p className="text-justify">
        L'articolo è stato scritto dall'Avv. <strong>{author}</strong> esperta
        in diritto dell'immigrazione. Da anni si occupa del diritto di asilo,
        riconoscimento della protezione internazionale dei rifugiati politici e
        delle vittime di tortura. Titolare dello Studio Legale Barberio di Roma,
        Via del Casale Strozzi n. 31. Seguici su
        {` `}
        <a href={social.facebook}>Facebook</a>
        {` `} o chiamaci al numero <strong>06.483694</strong>
      </p>
    </StyledBio>
  );
}
const StyledBio = styled.div`
  display: flex;
  margin-bottom: 2rem;
  .author-image {
    margin-right: 2rem;
    margin-top: 2rem;
    margin-bottom: 0;
    min-width: 50px;
    border-radius: 100%;
  }
`;
