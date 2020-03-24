import styled from "styled-components";

export const Covid = styled.div`
  color: ${(props) => props.theme.lightBlack};

  h4 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.black};
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme.lightBlack};
  }

  a {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
    transition: all 0.35s ease;

    &:hover {
      color: ${(props) => props.theme.secondaryColor};
    }

    &:hover strong {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;
