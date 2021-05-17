import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/seo";
import Hero from "../../components/Global/Hero";
import Info from "../../components/Global/Info";
import Mappa from "../../components/Global/Map";
import { StudioStyledBackground } from "../../components/Styles/StudioStyledBackground";

// Utils
import { findTitleLeft, findTitleRight } from "../../utils/title";

// Animations
import Fade from "../../components/Animations/Fade";

// Coordinate
const coordinate = [
  {
    nome: "sede",
    lat: 41.916878,
    lng: 12.453008,
  },
];

const ContactUs = ({ data }) => {
  const { title, heading, description } = data.markdownRemark.frontmatter;

  return (
    <Layout lingua="EN">
      <SEO
        lang="en"
        title={title}
        description={description}
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
          titleLeft={findTitleLeft(heading)}
          titleRight={findTitleRight(heading)}
          descrizione={description}
        />
      </StudioStyledBackground>
      <div className="container">
        <Fade>
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
              <Widget>
                <h5 className="mb-2">WHERE WE ARE</h5>
                <Mappa coordinate={coordinate} />
              </Widget>
            </div>
            <div className="col-md-4 my-5">
              <Widget>
                <h5 className="mb-2">INFO</h5>
                <Info />
              </Widget>
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default ContactUs;

const Widget = styled.div`
  text-align: justify;

  h5 {
    color: ${(props) => props.theme.black};
  }

  p {
    color: ${(props) => props.theme.lightBlack};
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  strong,
  a {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
  }
`;

export const ContactUsPageQuery = graphql`
  query ContactUsQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-us" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
    banner: file(relativePath: { eq: "laura-contatti-banner-01.jpg" }) {
      publicURL
    }
    tabletBanner: file(relativePath: { eq: "laura-contatti-banner-01.jpg" }) {
      publicURL
    }
    mobileBanner: file(relativePath: { eq: "laura-contatti-banner-01.jpg" }) {
      publicURL
    }
  }
`;
