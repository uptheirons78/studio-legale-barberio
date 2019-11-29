import React from "react";
import styled from "styled-components";

// Components
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
// Assets
import LibroImage from "./LibroImage";
import LauraImage from "./LauraImage";

const Aside = () => {
  return (
    <div className="col-md-4 mb-5 pl-5">
      <h4 className="heading-2">News</h4>
      <hr />
      <Widget className="sidebar-widget mb-5">
        <h5>Il Diritto degli Stranieri</h5>
        <LibroImage />
        <p className="mt-3">
          L'Avv. Laura Barberio è autrice del manuale{" "}
          <strong>"Il Diritto degli Stranieri"</strong> edito dalla{" "}
          <a href="https://www.dikegiuridica.it/prodotto.php?id=995">
            Dike Giuridica
          </a>{" "}
          che affronta in modo esaustivo gli istituti posti a base del diritto
          dell’immigrazione connessi all'ingresso, al soggiorno,
          all'allontanamento degli stranieri e alla loro tutela in sede civile,
          penale ed amministrativa. È corredato da tabelle e schede pratiche con
          relativi formulari di ricorsi.
        </p>
      </Widget>
      <Widget className="sidebar-widget mb-5">
        <h5>Laura Barberio</h5>
        <LauraImage />
        <p className="mt-3">
          L’Avv. Laura Barberio è membro del Comitato scientifico e relatrice
          nell’ambito del{" "}
          <strong>Corso di aggiornamento per avvocati immigrazionisti </strong>
          promosso dall’Ordine degli Avvocati di Roma. Il corso si svolge ogni
          lunedì presso la Corte di Cassazione dalle ore 15.30 alle ore 18.30.
        </p>
      </Widget>
      <Widget className="sidebar-widget mb-5">
        <h5>Seguici</h5>
        <ul className="social-container">
          <li className="social-link social-link__facebook">
            <a href="https://www.facebook.com/studiobarberio.org/">
              <FaFacebookF />
            </a>
          </li>
          <li className="social-link social-link__linkedin">
            <a href="https://it.linkedin.com/in/avv-laura-barberio-99156368">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-link social-link__twitter">
            <a href="https://twitter.com/laurabarberio">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </Widget>
      <Widget className="sidebar-widget mb-5">
        <h5>Contatti</h5>
        <p>Via del Casale Strozzi, 31 00195 Roma</p>
        <p>Tel: 06.483694</p>
        <p>Tel: 06.48977102</p>
        <p>Fax: 06.45765396</p>
        <p>Email: avvocatolaura@studiobarberio.org</p>
      </Widget>
    </div>
  );
};

export default Aside;

const Widget = styled.div`
  text-align: justify;

  h5 {
    color: ${props => props.theme.black};
  }

  p {
    color: ${props => props.theme.lightBlack};
    font-size: 0.9rem;
    margin-bottom: 0;
  }

  strong,
  a {
    color: ${props => props.theme.primaryColor};
    font-weight: 700;
  }

  .social-container {
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
  }
`;
