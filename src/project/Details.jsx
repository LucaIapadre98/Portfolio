import portFolio from '../database/Database';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();                                                                                 // Prende l'ID dall'URL
  const [project, setProject] = useState(portFolio);
  const [projectDetails, setProjectDetails] = useState(null);

  console.log('DB:', project);
  console.log('ID from URL:', id);

  useEffect(() => {
    try {
      const foundProject = project.find((item) => item.id === parseInt(id));
      setProjectDetails(foundProject);
      console.log('Dettagli del progetto:', foundProject);
    } catch (error) {
      console.error('Errore nel caricamento dei dettagli del progetto:', error);
    }
  }, [id, project]);

  if (!projectDetails) {
    return <div className="container my-5">Progetto non trovato</div>;
  }

  return (
    <>
      <div className="container my-5">
        <h1>{projectDetails.title}</h1>
        <p>
          Qui puoi trovare informazioni dettagliate sul progetto selezionato.
        </p>
      </div>
      <div className="container my-5" id="progetti">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2">
            <div className="card h-100 shadow-sm">
              <img
                src={projectDetails.image}
                className="card-img-top"
                alt={projectDetails.title}
                style={{
                  height: '400px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  padding: '3px',
                }}
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{projectDetails.title}</h4>
                <p className="card-text">
                  <strong>Descrizione:</strong> {projectDetails.description}
                </p>
                <p className="card-text">
                  <strong>Strumenti utilizzati:</strong>{' '}
                  {projectDetails.strument}
                </p>
                <p className="card-text">
                  <strong>Dettagli:</strong> {projectDetails.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
