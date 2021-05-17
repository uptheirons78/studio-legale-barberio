import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Hero from "../components/Global/Hero";
import CollaboratoriCard from "../components/Collaboratori/CollaboratoriCard";
import { StudioStyledBackground } from "../components/Styles/StudioStyledBackground";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

// Animations
import Fade from "../components/Animations/Fade";

// Language
const lingua = "IT";

const CollaboratoriPage = ({ data }) => {
  const { title, heading, description } = data.markdownRemark.frontmatter;
  const collaboratori =
    data.markdownRemark.frontmatter.collaboratori.collaboratori_esterni;

  return (
    <Layout lingua={lingua}>
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
          {collaboratori.map((collaboratore) => (
            <CollaboratoriCard
              key={collaboratore.name}
              collaboratore={collaboratore}
              lingua={lingua}
            />
          ))}
        </Fade>
      </div>
    </Layout>
  );
};

export default CollaboratoriPage;

export const CollaboratoriPageQuery = graphql`
  query CollaboratoriQuery {
    banner: file(relativePath: { eq: "studio__banner-01.jpg" }) {
      publicURL
    }
    tabletBanner: file(relativePath: { eq: "studio__banner-ipad-01.jpg" }) {
      publicURL
    }
    mobileBanner: file(relativePath: { eq: "laura-home-mobile.jpg" }) {
      publicURL
    }
    markdownRemark(frontmatter: { templateKey: { eq: "collaboratori-page" } }) {
      frontmatter {
        title
        heading
        description
        collaboratori {
          collaboratori_esterni {
            name
            thumbnail
            titolo
            en_titolo
            foro
            en_foro
            specializzazione
            en_specializzazione
            indirizzo
            telefono
            email
            website
            description
            en_description
          }
        }
      }
    }
  }
`;
