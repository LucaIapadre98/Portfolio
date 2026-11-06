const technologies = ['Java', 'React.js', 'Docker', 'PostgreSQL', 'AWS'];

const contributions = [
  {
    number: '01',
    title: 'Sviluppo full stack',
    description:
      'Sviluppo e manutenzione di applicazioni web in ambito aziendale, con attività sia backend che frontend.',
  },
  {
    number: '02',
    title: 'Lavoro di squadra',
    description:
      'Collaborazione con il team di sviluppo nelle diverse fasi del lavoro, dalla progettazione alla gestione delle soluzioni software.',
  },
];

export default function Esperienze() {
  return (
    <section className="page-main">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow"><span className="eyebrow-dot" /> Percorso professionale</span>
          <h1>Esperienza sul campo.</h1>
          <p>
            Un’esperienza in un contesto enterprise, dove ho potuto contribuire
            allo sviluppo software e crescere insieme a un team.
          </p>
        </header>

        <article className="experience-card">
          <div className="experience-accent" aria-hidden="true" />
          <div className="experience-content">
            <header className="experience-header">
              <div>
                <span className="experience-period">ESPERIENZA TIROCINIO</span>
                <h2>Accenture</h2>
                <p className="experience-role">Analyst Developer · Backend &amp; Frontend</p>
              </div>
              <span className="experience-monogram" aria-label="Accenture">a</span>
            </header>

            <p className="experience-summary">
              Ho lavorato allo sviluppo e alla manutenzione di applicazioni web
              in ambito aziendale, occupandomi sia delle attività backend che
              frontend. Ho utilizzato tecnologie quali Java, React.js, Docker,
              PostgreSQL e AWS, collaborando con team di sviluppo nelle diverse
              fasi di progettazione, implementazione e gestione delle soluzioni
              software.
            </p>

            <div className="experience-divider" />

            <div className="experience-lower">
              <div>
                <span className="experience-label">AREE DI CONTRIBUTO</span>
                <div className="contribution-list">
                  {contributions.map((contribution) => (
                    <div className="contribution-item" key={contribution.number}>
                      <span className="contribution-number">{contribution.number}</span>
                      <div>
                        <h3>{contribution.title}</h3>
                        <p>{contribution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="experience-tech">
                <span className="experience-label">TECNOLOGIE</span>
                <div className="experience-tags">
                  {technologies.map((technology) => (
                    <span className="experience-tag" key={technology}>{technology}</span>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
