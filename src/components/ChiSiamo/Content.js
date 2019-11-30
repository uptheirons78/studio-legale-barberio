import React from "react";
import styled from "styled-components";

const Content = ({ data }) => {
  return (
    <AboutContent className="col-md-8 mb-5">
      <h4 className="heading-2">Le Nostre Attività</h4>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></div>
    </AboutContent>
  );
};

export default Content;

const AboutContent = styled.div`
  text-align: justify !important;

  a,
  strong {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }
`;
