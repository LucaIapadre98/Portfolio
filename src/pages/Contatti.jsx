export default function Contatti() {
  return (
    <section className="page-main">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow"><span className="eyebrow-dot" /> Contatti</span>
          <h1>Costruiamo qualcosa insieme.</h1>
          <p>Hai un progetto in mente o vuoi semplicemente fare due chiacchiere? Mi fa piacere sentirti.</p>
        </header>

        <div className="row g-3 contact-grid">
          <div className="col-md-6">
            <a className="surface-card contact-card" href="mailto:luca.iap.1998@gmail.com">
              <span className="contact-icon" aria-hidden="true">@</span>
              <h2>Email</h2>
              <p>luca.iap.1998@gmail.com<br />lucaiapadre1998@gmail.com</p>
            </a>
          </div>
          <div className="col-md-6">
            <a className="surface-card contact-card" href="https://github.com/LucaIapadre98" target="_blank" rel="noreferrer">
              <span className="contact-icon" aria-hidden="true">GH</span>
              <h2>GitHub</h2>
              <p>github.com/LucaIapadre98</p>
            </a>
          </div>
          <div className="col-md-6">
            <a className="surface-card contact-card" href="https://www.linkedin.com/in/luca-iapadre-741b00375/" target="_blank" rel="noreferrer">
              <span className="contact-icon" aria-hidden="true">in</span>
              <h2>LinkedIn</h2>
              <p>linkedin.com/in/luca-iapadre-741b00375/</p>
            </a>
          </div>
          <div className="col-md-6">
            <a className="surface-card contact-card" href="tel:+393345977246">
              <span className="contact-icon" aria-hidden="true">↗</span>
              <h2>Telefono</h2>
              <p>+39 334 5977 246</p>
            </a>
          </div>
        </div>

        <div className="contact-note">
          <p>Sono sempre interessato a nuove opportunità e collaborazioni. Non esitare a contattarmi!</p>
        </div>
      </div>
    </section>
  );
}
