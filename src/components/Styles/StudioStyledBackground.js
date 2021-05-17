import styled from "styled-components";

export const StudioStyledBackground = styled.div`
  background-image: url(${(props) => props.banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 769px) {
    background-image: url(${(props) => props.tabletBanner});
    background-position: center center;
  }
  @media screen and (max-width: 480px) {
    background-image: url(${(props) => props.mobileBanner});
    background-position: center right;
  }
`;
