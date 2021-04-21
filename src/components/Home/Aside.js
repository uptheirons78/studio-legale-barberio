import React from "react";
import styled from "styled-components";

// Components
import Social from "../Global/Social";
import Info from "../Global/Info";
// Assets
import LibroImage from "./LibroImage";
import LauraImage from "./LauraImage";

const Aside = ({ lingua, data }) => {
  return (
    <div className="col-md-4 mb-5 pl-5 aside">
      <h4 className="heading-2">News</h4>
      <hr />
      {lingua === "IT" && (
        <Widget className="sidebar-widget mb-5">
          <h5 style={{ textAlign: "left" }}>
            Corso di Formazione in Diritto dell'Immigrazione
          </h5>
          <p>
            Anche quest'anno il{" "}
            <strong>Consiglio dell'Ordine degli Avvocati di Roma</strong> in
            collaborazione con il CREG - Centro di Ricerche economiche e
            giuridiche dell'Università di Tor Vergata ha organizzato il Corso di
            formazione in diritto dell'Immigrazione.
          </p>
          <p style={{ marginTop: "5px", marginBottom: "5px" }}>
            Nel Comitato scientifico l'avv. Laura Barberio, l'avv. Fabio Maria
            Galiani, il Prof. Avv. Paolo Iafrate e l'Avv. Roberto Maria Meola.{" "}
          </p>
          <a
            href="/assets/locandina-corso-immigrazione-2021.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leggi il programma
          </a>
          <p style={{ marginTop: "5px", marginBottom: "5px" }}>
            Durante l’incontro del 23 aprile 2021 parteciperà in qualità di
            relatrice anche l’Avvocato Laura Barberio.{" "}
          </p>
          <a
            href="https://bit.ly/3n7SPG5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Programma della lezione
          </a>
        </Widget>
      )}
      <Widget className="sidebar-widget mb-5">
        <h5 style={{ textAlign: "left" }}>
          {data.nodes[0].frontmatter[`${lingua}`].title}
        </h5>
        <p>{data.nodes[0].frontmatter[`${lingua}`].first}</p>
        <p
          style={{
            fontWeight: "bold",
            marginTop: "5px",
            marginBottom: "5px",
            color: "#701212",
          }}
        >
          {data.nodes[0].frontmatter[`${lingua}`].second}
        </p>
        <p style={{ marginTop: "5px", marginBottom: "5px" }}>
          {data.nodes[0].frontmatter[`${lingua}`].third}
        </p>
        <p style={{ marginTop: "5px" }}>
          {data.nodes[0].frontmatter[`${lingua}`].fourth}
        </p>
      </Widget>
      <Widget className="sidebar-widget mb-5">
        <h5>Il Diritto degli Stranieri</h5>
        <LibroImage />
        {lingua === "IT" ? <Libro /> : <Book />}
      </Widget>
      <Widget className="sidebar-widget mb-5">
        <h5>Laura Barberio</h5>
        <LauraImage />
        {lingua === "IT" ? <LauraText /> : <LauraEnglishText />}
      </Widget>
      <Widget className="sidebar-widget mb-5">
        {lingua === "IT" ? <h5>Seguici</h5> : <h5>Follow Us</h5>}
        <Social />
      </Widget>
      <Widget className="sidebar-widget mb-5">
        {lingua === "IT" ? <h5>Contattaci</h5> : <h5>Contact Us</h5>}
        <Info />
      </Widget>
    </div>
  );
};

export default Aside;

const Widget = styled.div`
  text-align: justify;

  h5 {
    color: ${(props) => props.theme.black};
  }

  p {
    color: ${(props) => props.theme.lightBlack};
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  strong,
  a {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 700;
  }
`;

const Libro = () => (
  <p className="mt-3">
    L'Avv. Laura Barberio è autrice del manuale{" "}
    <strong>"Il Diritto degli Stranieri"</strong> edito dalla{" "}
    <a href="https://www.dikegiuridica.it/prodotto.php?id=995">
      Dike Giuridica
    </a>{" "}
    che affronta in modo esaustivo gli istituti posti a base del diritto
    dell’immigrazione connessi all'ingresso, al soggiorno, all'allontanamento
    degli stranieri e alla loro tutela in sede civile, penale ed amministrativa.
    È corredato da tabelle e schede pratiche con relativi formulari di ricorsi.
  </p>
);

const Book = () => (
  <p className="mt-3">
    The Lawyer Laura Barberio is the author of the book{" "}
    <strong>"Il Diritto degli Stranieri"</strong> published by{" "}
    <a href="https://www.dikegiuridica.it/prodotto.php?id=995">
      Dike Giuridica
    </a>{" "}
    which deals exhaustively with the institutions based on immigration law
    related to entry, stay, expulsion of foreigners from Italy and their legal
    protection in front of civil, criminal and administrative italian courts. It
    is provided with tables and practical forms with relative appeals
    guidelines.
  </p>
);

const LauraText = () => (
  <p className="mt-3">
    L’Avv. Laura Barberio è membro del Comitato scientifico e relatrice
    nell’ambito del{" "}
    <strong>Corso di aggiornamento per avvocati immigrazionisti </strong>
    promosso dall’Ordine degli Avvocati di Roma. Il corso si svolge ogni lunedì
    presso la Corte di Cassazione dalle ore 15.30 alle ore 18.30.
  </p>
);

const LauraEnglishText = () => (
  <p className="mt-3">
    The Lawyer Laura Barberio is member of a Lawyers Scientific Committee and a
    lecturer of the <strong>Immigration Lawyers Refresher Course</strong>{" "}
    promoted by the Lawyers Board of Rome (Italy). The course takes place every
    Monday at Corte di Cassazione in Rome from 15.30 to 18.30.
  </p>
);
