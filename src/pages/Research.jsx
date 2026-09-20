import { publications } from '../data.js'
import { Icon } from '../components/Icons.jsx'

export default function Research() {
  return (
    <section>
      <div className="page-head">
        <span className="sec-num">Research</span>
        <h1 className="page-title">Publications &amp; research</h1>
      </div>

      <p className="lead">
        Peer-reviewed work in machine learning, optimization, and applied signal processing.
      </p>

      <div className="pub-list">
        {publications.map((p) => (
          <article className="pub" key={p.title}>
            <div className="year">{p.year}</div>
            <div>
              <h3>{p.title}</h3>
              <div className="venue">{p.venue}</div>
              <div className="authors">{p.authors}</div>
            </div>
          </article>
        ))}
      </div>

      <p className="lead">
        <a
          className="text-link"
          href="https://scholar.google.com/citations?user=F1YFZ2gAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full list on Google Scholar <Icon name="arrow" size={15} />
        </a>
      </p>
    </section>
  )
}
