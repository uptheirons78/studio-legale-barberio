import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Collaboratori/Background";
import Hero from "../components/Global/Hero";
import CollaboratoriCard from "../components/Collaboratori/CollaboratoriCard";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

const CollaboratoriPage = ({ data }) => {
  const { title, heading, description } = data.markdownRemark.frontmatter;
  const collaboratori =
    data.markdownRemark.frontmatter.collaboratori.collaboratori_esterni;

  return (
    <Layout lingua="IT">
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
      <Background>
        <Hero
          titleLeft={findTitleLeft(heading)}
          titleRight={findTitleRight(heading)}
          descrizione={description}
        />
      </Background>
      <div className="container">
        {collaboratori.map(collaboratore => (
          <CollaboratoriCard
            key={collaboratore.name}
            collaboratore={collaboratore}
          />
        ))}
      </div>
    </Layout>
  );
};

export default CollaboratoriPage;

export const CollaboratoriPageQuery = graphql`
  query CollaboratoriQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "collaboratori-page" } }) {
      frontmatter {
        title
        heading
        description
        collaboratori {
          collaboratori_esterni {
            name
            titolo
            foro
            specializzazione
            indirizzo
            telefono
            email
            website
            description
          }
        }
      }
    }
  }
`;
