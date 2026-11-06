const skillGroups = [
  {
    title: 'Frontend',
    icon: '</>',
    skills: [
      ['React.js', '/react.js.png'],
      ['JavaScript (ES6+)', '/javascript.png'],
      ['HTML5 & CSS3', '/html&css.png'],
      ['Bootstrap', '/bootstrap.jpg'],
      ['Vite', '/vite.png'],
      ['TypeScript', '/typescript.png']
    ],
  },
  {
    title: 'Backend',
    icon: '{ }',
    skills: [
      ['Node.js', '/node.png'],
      ['Express.js', '/express.png'],
      ['MySQL', '/mySQL.png'],
      ['REST API', '/restAPI.png'],
      ['Java', '/java-logo.png'],
    ],
  },
  {
    title: 'Strumenti',
    icon: '⌘',
    skills: [
      ['Visual Studio Code', '/vscode.png'],
      ['Git & GitHub', '/git&github.png'],
      ['npm', '/npm.png'],
      ['Docker', '/docker.png'],
    ],
  },
];

const learning = [
  ['React Router', '/reactrouter.png'],
  ['TypeScript', '/typescript.png'],
  ['Next.js', '/next.js.png'],
];

export default function Strumenti() {
  return (
    <section className="page-main">
      <div className="container">
        <header className="page-heading">
          <span className="eyebrow"><span className="eyebrow-dot" /> Stack tecnologico</span>
          <h1>Gli strumenti del mio lavoro</h1>
          <p>Le tecnologie che uso per progettare e sviluppare applicazioni web, e quelle che sto esplorando per continuare a crescere.</p>
        </header>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-lg-4 col-md-6" key={group.title}>
              <article className="surface-card skill-card">
                <div className="skill-card-header">
                  <span className="skill-icon" aria-hidden="true">{group.icon}</span>
                  <h2>{group.title}</h2>
                </div>
                <ul className="skill-list">
                  {group.skills.map(([name, image]) => (
                    <li className="skill-item" key={name}>
                      <img src={image} alt="" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>

        <div className="row g-4 mt-1">
          <div className="col-12">
            <section className="surface-card learning-card">
              <span className="skill-icon" aria-hidden="true">↗</span>
              <div>
                <h2 className="content-title">In continua evoluzione</h2>
                <p>Sto approfondendo nuove tecnologie per realizzare esperienze web sempre più complete.</p>
                <div className="learning-logos">
                  {learning.map(([name, image]) => (
                    <span className="learning-chip" key={name}>
                      <img src={image} alt="" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
