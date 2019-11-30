import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

// Components
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const q = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
          linkedin
          facebook
        }
      }
    }
  }
`;

const Social = () => {
  const data = useStaticQuery(q);
  const { facebook, linkedin, twitter } = data.site.siteMetadata.social;

  return (
    <SocialContainer className="social-container">
      <li className="social-link social-link__facebook">
        <a href={facebook}>
          <FaFacebookF />
        </a>
      </li>
      <li className="social-link social-link__linkedin">
        <a href={linkedin}>
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-link social-link__twitter">
        <a href={twitter}>
          <FaTwitter />
        </a>
      </li>
    </SocialContainer>
  );
};

export default Social;

const SocialContainer = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;

  .social-link {
    margin-right: 0.5rem;
    svg {
      fill: #ffffff;
      width: 3rem;
      height: 3rem;
      padding: 1rem;
    }
  }
  .social-link__facebook {
    svg {
      background: #3a579a;
    }
  }
  .social-link__linkedin {
    svg {
      background: #127bb6;
    }
  }
  .social-link__twitter {
    svg {
      background: #4ab3f4;
    }
  }
`;
