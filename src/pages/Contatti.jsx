export default function Contatti() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contatti</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">I miei contatti!</h5>

              <div className="row g-4">
                <div className="col-md-6 text-center">
                  <div className="mb-3">
                    <i className="bi bi-envelope fs-1 text-primary"></i>
                    <h6 className="mt-2">Email</h6>
                    <p className="text-muted" style={{ margin: '0' }}>
                      luca.iap.1998@gmail.com
                    </p>
                    <span className="text-muted">o</span>
                    <p className="text-muted">lucaiapadre1998@gmail.com</p>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <div className="mb-3">
                    <i className="bi bi-github fs-1 text-dark"></i>
                    <h6 className="mt-2">GitHub</h6>
                    <p className="text-muted">github.com/LucaIapadre98</p>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <div className="mb-3">
                    <i className="bi bi-linkedin fs-1 text-primary"></i>
                    <h6 className="mt-2">LinkedIn</h6>
                    <p className="text-muted">
                      linkedin.com/in/luca-iapadre-741b00375/
                    </p>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <div className="mb-3">
                    <i className="bi bi-phone fs-1 text-success"></i>
                    <h6 className="mt-2">Telefono</h6>
                    <p className="text-muted">+39 334 5977 246</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <p className="text-muted">
                  Sono sempre interessato a nuove opportunità e collaborazioni.
                  Non esitare a contattarmi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
