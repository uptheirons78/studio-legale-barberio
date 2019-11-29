import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// Assets
import SentenzaImage from "../../images/banner-sentenze.jpg";

const Card = ({ post }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100 shadow">
        <Inner className="inner">
          <img
            className="card-img-top"
            src={SentenzaImage}
            alt={post.frontmatter.title}
          />
          <div className="card-caption px-2 py-1">{post.frontmatter.date}</div>
        </Inner>
        <div className="card-body">
          <h5
            className="card-title text-justify mb-3"
            style={{ fontSize: "1.1rem" }}
          >
            {post.frontmatter.title}
          </h5>
          <p className="card-text text-justify" style={{ fontSize: "0.9rem" }}>
            {post.excerpt}
          </p>
        </div>
        <div
          className="card-footer"
          style={{ backgroundColor: "#fff", borderTop: "none" }}
        >
          <Link
            to={`/blog/${post.fields.slug}`}
            className="btn leggi-tutto"
            style={{
              backgroundColor: "#701212",
              color: "#fff",
              fontSize: "0.9rem",
              letterSpacing: "1px",
            }}
          >
            Leggi tutto <span>&raquo;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

const Inner = styled.div`
  overflow: hidden;
  position: relative;

  img {
    transition: all 1.5s ease;
  }

  &:hover img {
    transform: scale(1.5) rotate(3deg);
  }

  .card-caption {
    position: absolute;
    top: 0;
    right: 0;
    background: ${props => props.theme.primaryColor};
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
`;
