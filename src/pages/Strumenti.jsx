export default function Strumenti() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">I miei Strumenti</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🚀 Frontend</h5>
              <ul className="list-unstyled">
                <li>• React.js</li>
                <li>• JavaScript (ES6+)</li>
                <li>• HTML5 & CSS3</li>
                <li>• Bootstrap</li>
                <li>• Vite</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">⚙️ Backend</h5>
              <ul className="list-unstyled">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• MySQL</li>
                <li>• REST API</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🛠️ Strumenti</h5>
              <ul className="list-unstyled">
                <li>• VS Code</li>
                <li>• Git & GitHub</li>
                <li>• npm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📚 Attualmente sto imparando</h5>
              <p className="card-text">
                Sto approfondendo le mie conoscenze in React Router, TypeScript
                e Next.js per creare applicazioni web sempre più performanti e
                moderne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
