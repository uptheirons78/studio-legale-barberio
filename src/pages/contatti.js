import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/Contatti/Background";
import Hero from "../components/Global/Hero";
import Info from "../components/Global/Info";

// Utils
import { findTitleLeft, findTitleRight } from "../utils/title";

const ContattiPage = ({ data }) => {
  const { title, heading, description } = data.markdownRemark.frontmatter;

  return (
    <Layout>
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
        <div className="row">
          <div className="col md 12">
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            ></div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-8 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            cupiditate necessitatibus vitae laudantium. Nulla voluptatem ratione
            reiciendis voluptas repellendus voluptates alias blanditiis! Ducimus
            neque ex, odit illum facere sapiente ipsum debitis? Natus nihil nam
            et obcaecati voluptas deserunt sed quod quos tenetur possimus?
            Perferendis velit veniam molestias asperiores consectetur
            praesentium expedita necessitatibus hic!
          </div>
          <div className="col-md-4 my-5">
            <Widget>
              <h5>Informazioni Utili</h5>
              <Info />
            </Widget>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContattiPage;

const Widget = styled.div`
  text-align: justify;

  h5 {
    color: ${props => props.theme.black};
  }

  p {
    color: ${props => props.theme.lightBlack};
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  strong,
  a {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }
`;

export const ContattiPageQuery = graphql`
  query ContattiQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "contatti-page" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
