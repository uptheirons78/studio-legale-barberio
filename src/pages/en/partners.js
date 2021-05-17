import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Hero from "../../components/Global/Hero";
import CollaboratoriCard from "../../components/Collaboratori/CollaboratoriCard";
import { StudioStyledBackground } from "../../components/Styles/StudioStyledBackground";

// Animations
import Fade from "../../components/Animations/Fade";

// Utils
import { findTitleLeft, findTitleRight } from "../../utils/title";

// Language
const lingua = "EN";

const PartnersPage = ({ data }) => {
  const {
    en_title,
    en_heading,
    en_description,
  } = data.markdownRemark.frontmatter;
  const collaboratori =
    data.markdownRemark.frontmatter.collaboratori.collaboratori_esterni;

  return (
    <Layout lingua={lingua}>
      <SEO
        lang="en"
        title={en_title}
        description={en_description}
        keywords={[
          `laura barberio`,
          `studio legale barberio`,
          `immigration law`,
          `political asylum`,
          `international protection`,
          `free legal aid`,
          `foreigners and refugees law`,
        ]}
      />
      <StudioStyledBackground
        banner={data.banner.publicURL}
        tabletBanner={data.tabletBanner.publicURL}
        mobileBanner={data.mobileBanner.publicURL}
      >
        <Hero
          titleLeft={findTitleLeft(en_heading)}
          titleRight={findTitleRight(en_heading)}
          descrizione={en_description}
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

export default PartnersPage;

export const PartnersPageQuery = graphql`
  query PartnersQuery {
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
        en_title
        en_heading
        en_description
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
