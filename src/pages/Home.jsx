import portFolio from '../database/Database';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> Portfolio personale</span>
              <h1>Ciao, sono Luca.<br /><span>Sviluppatore web.</span></h1>
              <p>
                Mi appassiona trasformare idee in esperienze digitali semplici e intuitive.
                Qui trovi alcuni dei progetti che ho realizzato e le tecnologie che uso
                per dare forma al web.
              </p>
              <div className="hero-actions">
                <a href="#progetti" className="button-primary">Esplora i progetti <span aria-hidden="true">↘</span></a>
                <Link to="/contatti" className="button-outline">Parliamone <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="hero-photo-wrap">
              <img src="/fotoprofilo.jpg" alt="Luca Iapadre" className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="container section-wrap" id="progetti">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> Progetti selezionati</span>
            <h2>I miei progetti</h2>
          </div>
          <p>Una raccolta di esperimenti e applicazioni realizzati con curiosità, attenzione ai dettagli e voglia di imparare.</p>
        </div>
        <div className="row g-4">
          {portFolio.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <article className="project-card">
                <img
                  src={item.image}
                  className="project-image"
                  alt={item.title}
                />
                <div className="project-body">
                  <span className="project-index">0{item.id} / PROGETTO</span>
                  <h3>{item.title}</h3>
                  <p>
                    Tecnologie: <strong>{item.strument}</strong>
                  </p>
                  <Link
                    to={`/details/${item.id}`}
                    className="text-link"
                  >
                    Scopri il progetto <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
