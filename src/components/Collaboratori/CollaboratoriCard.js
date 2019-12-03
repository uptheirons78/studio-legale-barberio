import React from "react";
import styled from "styled-components";

const CollaboratoriCard = ({ collaboratore }) => {
  return (
    <div className="row mb-5">
      <CollaboratoriInfo className="col-md-4 collaboratori-info">
        <h5>{collaboratore.name.toUpperCase()}</h5>
        <small className="text-muted">
          {collaboratore.titolo} - Foro di {collaboratore.foro}
        </small>
        <div className="mt-3">
          {collaboratore.indirizzo && (
            <p>
              <span className="collaboratori-contatti">Indirizzo:</span>{" "}
              {collaboratore.indirizzo}
            </p>
          )}
          {collaboratore.telefono && (
            <p>
              <span className="collaboratori-contatti">Telefono:</span>{" "}
              {collaboratore.telefono}
            </p>
          )}
          {collaboratore.email && (
            <p>
              <span className="collaboratori-contatti">E-mail:</span>{" "}
              {collaboratore.email}
            </p>
          )}
          {collaboratore.website && (
            <p>
              <span className="collaboratori-contatti">Website:</span>{" "}
              {collaboratore.website}
            </p>
          )}
        </div>
      </CollaboratoriInfo>
      <CollaboratoriBody className="col-md-8 text-justify">
        <p>{collaboratore.description}</p>
      </CollaboratoriBody>
    </div>
  );
};

export default CollaboratoriCard;

const CollaboratoriInfo = styled.div`
  h5 {
    color: ${props => props.theme.black};
    margin-bottom: 0;
  }

  small {
    margin-top: 0;
  }

  p {
    color: ${props => props.theme.lightBlack};
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  .collaboratori-contatti {
    font-weight: 700;
    color: ${props => props.theme.black};
  }
`;

const CollaboratoriBody = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  p {
    color: ${props => props.theme.lightBlack};
    font-size: 0.9rem;
    padding: 0 0 0 1rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
      border-left: none;
      padding: 0;
    }
  }
`;
