import portFolio from '../database/Database';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const projectDetails = portFolio.find((item) => item.id === Number(id));

  if (!projectDetails) {
    return (
      <section className="not-found">
        <span className="eyebrow"><span className="eyebrow-dot" /> Progetto non trovato</span>
        <h1>Qui non c'è niente.</h1>
        <p>Il progetto che cerchi potrebbe non essere disponibile.</p>
        <Link to="/" className="button-primary">Torna alla home <span aria-hidden="true">→</span></Link>
      </section>
    );
  }

  return (
    <section className="page-main">
      <div className="container">
        <header className="details-heading">
          <Link className="back-link" to="/#progetti"><span aria-hidden="true">←</span> Tutti i progetti</Link>
          <span className="eyebrow"><span className="eyebrow-dot" /> Progetto 0{projectDetails.id}</span>
          <h1>{projectDetails.title}</h1>
          <p>{projectDetails.description}</p>
        </header>

        <div className="details-gallery" aria-label={`Immagini di ${projectDetails.title}`}>
          {[projectDetails.image1, projectDetails.image2, projectDetails.image3].map((image, index) => (
            <img
              key={image}
              src={image.trim()}
              alt={`${projectDetails.title} - schermata ${index + 1}`}
            />
          ))}
        </div>

        <article className="surface-card details-content">
          <h2>Il progetto</h2>
          <p>{projectDetails.details}</p>
          <h2>Tecnologie utilizzate</h2>
          <p>{projectDetails.strument}</p>
        </article>
      </div>
    </section>
  );
}