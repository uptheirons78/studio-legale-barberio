import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import HeroLanding from "../components/Global/LandingHero";
import SocialShare from "../components/Global/SocialShare";

// Animations
import Fade from "../components/Animations/Fade";

// Assets
import LandingPageImage from "../images/laura-contatti-banner-01.jpg";
import LandingPageOgImage from "../images/laura-home-mobile.jpg";

const BlogPost = ({ data }) => {
  const { title, description, category } = data.markdownRemark.frontmatter;

  const { slug } = data.markdownRemark.fields;
  const ogImage = LandingPageOgImage;

  return (
    <Layout lingua="IT">
      <SEO
        title={title}
        description={description}
        image={ogImage}
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
      <div
        style={{
          backgroundImage: `url(${LandingPageImage})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <HeroLanding
          title={title}
          description={description}
          category={category}
        />
      </div>
      <LandingPageContainer
        className="container my-5"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <Fade>
          <div className="row">
            <div
              className="text-justify col-md-12 px-0"
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            ></div>
            <SocialShare
              socialConfig={{
                config: {
                  title: { title },
                  url: `https://www.studiobarberio.org${slug}`,
                },
              }}
            />
          </div>
        </Fade>
      </LandingPageContainer>
    </Layout>
  );
};

export default BlogPost;

const LandingPageContainer = styled.div`
  strong,
  a {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 500;
    transition: all 0.35s ease;
  }

  a:hover {
    color: ${(props) => props.theme.secondaryColor};
  }

  @media screen and (max-width: 989px) {
    max-width: 700px !important;
  }
  @media screen and (max-width: 770px) {
    max-width: 500px !important;
  }
  @media screen and (max-width: 565px) {
    width: 100% !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }

  p,
  li {
    @media screen and (max-width: 770px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 565px) {
      font-size: 0.9rem;
    }
  }

  img {
    display: block;
    margin: 1rem auto;
    max-width: 600px;
    width: 100%;
  }

  .post-button {
    background-color: ${(props) => props.theme.primaryColor};
    color: #fff;
    border: none;
    transition: all 0.35s ease;
    margin-right: 1rem;
    box-shadow: none !important;

    &:hover {
      background-color: ${(props) => props.theme.secondaryColor};
      color: #fff !important;
    }
  }
`;

// Gatsby Query
export const pageQuery = graphql`
  query LandingPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "it")
        description
        category
      }
    }
  }
`;
