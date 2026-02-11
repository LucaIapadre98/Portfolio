import { useState } from 'react';
import portFolio from '../database/Database';
import { Link } from 'react-router-dom';

export default function Home() {
  const [project, setProject] = useState(portFolio);

  console.log('DB:', project);

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="display-4 fw-bold">Benvenuto nel mio Portfolio!</h1>
          <p className="lead mt-3">
            Qui puoi trovare i miei progetti e le mie competenze.
          </p>
          <a href="#progetti" className="btn btn-light btn-lg mt-3">
            Scopri di più
          </a>
        </div>
      </section>

      <section className="container my-5" id="progetti">
        <h2 className="text-center mb-4">I miei progetti</h2>
        <div className="row g-4">
          {project.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{
                    height: '340px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    padding: '3px',
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text flex-grow-1">
                    In questo progetto troviamo l'utilizzo di:
                    <strong>{item.strument}</strong>
                  </p>
                  <Link
                    to={`/details/${item.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Dettagli
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
