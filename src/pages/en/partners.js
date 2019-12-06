import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Background from "../../components/Collaboratori/Background";
import Hero from "../../components/Global/Hero";
import CollaboratoriCard from "../../components/Collaboratori/CollaboratoriCard";

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
      <Background>
        <Hero
          titleLeft={findTitleLeft(en_heading)}
          titleRight={findTitleRight(en_heading)}
          descrizione={en_description}
        />
      </Background>
      <div className="container">
        <Fade>
          {collaboratori.map(collaboratore => (
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
    markdownRemark(frontmatter: { templateKey: { eq: "collaboratori-page" } }) {
      frontmatter {
        en_title
        en_heading
        en_description
        collaboratori {
          collaboratori_esterni {
            name
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
