import { projects } from '../data.js'
import { Icon } from '../components/Icons.jsx'

export default function Projects() {
  return (
    <section>
      <div className="page-head">
        <span className="sec-num">Projects</span>
        <h1 className="page-title">Things I've built</h1>
      </div>

      <p className="lead">
        A selection of research prototypes and engineering projects. More on my GitHub.
      </p>

      <div className="grid">
        {projects.map((p) => (
          <a
            className="card card-link"
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-top">
              <h3>{p.title}</h3>
              <Icon name="arrow" size={16} />
            </div>
            <p>{p.desc}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
