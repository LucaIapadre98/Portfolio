export default function Strument() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div class="container" style={{ width: '100%' }}>
          <a class="navbar-brand fw-bold" href="#">
            🌐 MioSito
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Strumenti
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
