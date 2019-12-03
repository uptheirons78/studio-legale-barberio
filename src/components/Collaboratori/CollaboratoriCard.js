import React from "react";
import styled from "styled-components";

const CollaboratoriCard = () => {
  return (
    <div className="row">
      <CollaboratoriInfo className="col-md-4 collaboratori-info">
        <h5>LUIGI MIGLIACCIO</h5>
        <small className="text-muted">
          Avvocato Cassazionista - Foro di Napoli
        </small>
        <div className="mt-3">
          <p>
            <span className="collaboratori-contatti">Indirizzo:</span> Piazza
            Cavour, 139 Napoli – 80137 – Italy
          </p>
          <p>
            <span className="collaboratori-contatti">Telefono:</span> +39 081
            5571137
          </p>
          <p>
            <span className="collaboratori-contatti">E-mail:</span>{" "}
            segreteria@studiolegalemigliaccio.com
          </p>
          <p>
            <span className="collaboratori-contatti">Website:</span>{" "}
            www.studiolegalemigliaccio.com
          </p>
        </div>
      </CollaboratoriInfo>
      <CollaboratoriBody className="col-md-8 text-justify">
        <p>
          Laureato nell’a.a. 1996/97 alla Facoltà di Giurisprudenza della
          Federico II di Napoli, è iscritto all’Ordine degli Avvocati di Napoli
          dal 2002 e, dal 2014, è iscritto all’albo degli avvocati
          Cassazionisti. Svolge la propria attività professionale in ambito
          civilistico ed amministrativo, in particolare in materia di tutela dei
          diritti umani e di diritto dell’immigrazione, nelle sue diverse
          articolazioni. Ha partecipato, sin dal 2001, in qualità di relatore a
          convegni, seminari e conferenze in materia di diritto
          dell’immigrazione e tutela dell’unità familiare, tra i quali lo Stage
          di Diritto dell’Unione Europea “Andrea Cafiero”, giunto alla sua
          quattordicesima edizione, tenutosi a San Marco di Castellabate (SA)
          dal 10 al 12 giugno. A tale incontro, l’Avvocato Migliaccio ha
          partecipato con un intervento dal titolo “La tutela giurisdizionale
          dello straniero: risoluzione di casi pratici”. Collabora inoltre con
          riviste giuridiche online tra cui immigrazione.it, della quale è
          membro del comitato di redazione e iussit.com, per la quale cura la
          sezione Immigrazione.
        </p>
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
  @media screen and (max-width: 600px) {
    margin-top: 1rem;
  }

  p {
    color: ${props => props.theme.lightBlack};
    font-size: 0.9rem;
    padding: 0 0 0 1rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
