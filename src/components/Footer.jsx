export default function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="container">
        <div className="footer-inner">
          <p><span className="footer-brand">Luca Iapadre</span> · © {new Date().getFullYear()} Tutti i diritti riservati</p>
          <p>Progettato e sviluppato con cura.</p>
        </div>
      </div>
    </footer>
  );
}
