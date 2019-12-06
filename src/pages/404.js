import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Components
import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Background from "../components/404/Background";
import Hero from "../components/Global/Hero";

// Animations
import Fade from "../components/Animations/Fade";

const NotFoundPage = () => (
  <Layout lingua="IT">
    <SEO
      title="404: Pagina Non Trovata"
      keywords={[
        `laura barberio`,
        `studio legale barberio`,
        `diritto immigrazione`,
        `asilo politico`,
        `protezione internazionale`,
        `gratuito patrocinio`,
        `diritto degli stranieri`,
      ]}
    />
    <Background>
      <Hero
        titleLeft="404"
        titleRight="Pagina Non Trovata"
        descrizione="La pagina che stai cercando, probabilmente, non esiste o è stata rimossa da questo sito. Ci scusiamo per l'inconveniente."
      />
    </Background>
    <div className="container">
      <Fade>
        <div className="row">
          <div className="col-md-12 my-3">
            <h1>Aspetta un momento ...</h1>
            <Content className="my-5 text-justify">
              <p>
                Anche se ciò che stai cercando non esiste o è stato rimosso dal
                sito, ciò non significa che tu debba lasciare il sito!
              </p>
              <p>
                Magari stavi cercando altro e ti sei semplicemente perso.
                Proviamo ad aiutarti con alcune pagine utili.
              </p>
              <p>
                Potrebbe interessarti visitare la Nostra{" "}
                <Link to="/">Home Page</Link> oppure scoprire di quali attività
                ci occupiamo e come potremmo esserti utili nella pagina{" "}
                <Link to="/chi-siamo">Chi Siamo</Link>.
              </p>
              <p>
                Nel caso volessi prendere visione di alcuni casi da Noi
                recentemente trattati nella materia del diritto
                dell'immigrazione, della quale l'Avvocato Laura Barberio è
                esperta, potrebbe interessarti la sezione dedicata alle{" "}
                <Link to="/sentenze">Sentenze</Link> oppure il Nostro{" "}
                <Link to="/blog">Blog</Link>.
              </p>
              <p>
                Qualora volessi invece, semplicemente, chiamarci o contattarci,
                ti invitiamo a visitare la pagina{" "}
                <Link to="/contatti">Contatti</Link>.
              </p>
            </Content>
            <p></p>
          </div>
        </div>
      </Fade>
    </div>
  </Layout>
);

export default NotFoundPage;

const Content = styled.div`
  a {
    font-weight: 700;
    transition: all 0.35s ease-in-out;

    &:hover {
      color: ${props => props.theme.secondaryColor};
    }
  }
`;
