import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const infoQuery = graphql`
  query {
    site {
      siteMetadata {
        ufficio {
          indirizzo
          city
          cap
          telefono
          telefono2
          fax
          email
        }
      }
    }
  }
`;

const Info = () => {
  const data = useStaticQuery(infoQuery);
  const {
    indirizzo,
    city,
    cap,
    telefono,
    telefono2,
    fax,
    email,
  } = data.site.siteMetadata.ufficio;

  return (
    <>
      <p>
        {indirizzo} {cap} {city}
      </p>
      <p>Tel: {telefono}</p>
      <p>Tel: {telefono2}</p>
      <p>Fax: {fax}</p>
      <p>Email: {email}</p>
    </>
  );
};

export default Info;
