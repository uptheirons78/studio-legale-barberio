import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/BlogPost/Background";
import Bio from "../components/BlogPost/Bio";
import HeroPost from "../components/Global/PostHero";
import SocialShare from "../components/Global/SocialShare";

// Animations
import Fade from "../components/Animations/Fade";

// Assets
import SentenzaImage from "../images/banner-sentenze.jpg";
import ArticoloImage from "../images/banner-rassegna-stampa.jpg";

const BlogPost = ({ data }) => {
  const {
    title,
    date,
    description,
    category,
    sentenza,
    sentenza_btn,
    link,
    articolo_btn,
  } = data.markdownRemark.frontmatter;

  const { slug } = data.markdownRemark.fields;
  const ogImage = category === "sentenza" ? SentenzaImage : ArticoloImage;

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
      <Background category={category}>
        <HeroPost
          title={title}
          date={date}
          description={description}
          category={category}
        />
      </Background>
      <PostContainer
        className="container my-5"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <Fade>
          <div className="row">
            <div
              className="col-md-12 px-0 mb-2 font-weight-bold text-justify"
              style={{ color: "#701212" }}
            >
              Categoria:{" "}
              <span style={{ color: "#393939", textTransform: "uppercase" }}>
                {category}
              </span>
            </div>
            <div
              className="col-md-12 px-0 mb-5 font-weight-bold text-justify"
              style={{ color: "#701212" }}
            >
              In breve: <span style={{ color: "#393939" }}>{description}</span>
            </div>
            <div
              className="text-justify col-md-12 px-0"
              dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html,
              }}
            ></div>
            <div className="col-md-12 px-0 mb-5">
              {sentenza && (
                <a
                  className="btn post-button"
                  href={sentenza}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sentenza_btn}
                </a>
              )}
              {link && (
                <a
                  className="btn post-button"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {articolo_btn}
                </a>
              )}
            </div>
            <SocialShare
              socialConfig={{
                config: {
                  title: { title },
                  url: `https://www.studiobarberio.org/blog${slug}`,
                },
              }}
            />
          </div>
          <hr />
          <Bio />
        </Fade>
      </PostContainer>
    </Layout>
  );
};

export default BlogPost;

const PostContainer = styled.div`
  strong,
  a {
    color: ${props => props.theme.primaryColor};
    font-weight: 500;
    transition: all 0.35s ease;
  }

  a:hover {
    color: ${props => props.theme.secondaryColor};
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

  p {
    @media screen and (max-width: 770px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 565px) {
      font-size: 0.9rem;
    }
  }

  .post-button {
    background-color: ${props => props.theme.primaryColor};
    color: #fff;
    border: none;
    transition: all 0.35s ease;
    margin-right: 1rem;
    box-shadow: none !important;

    &:hover {
      background-color: ${props => props.theme.secondaryColor};
      color: #fff !important;
    }
  }
`;

// Gatsby Query
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        sentenza
        sentenza_btn
        link
        articolo_btn
      }
    }
  }
`;
