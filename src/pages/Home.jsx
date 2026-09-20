import { Link } from 'react-router-dom'
import { profile, interests, projects } from '../data.js'
import { Icon } from '../components/Icons.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow">
          <span className="dot" /> Available for collaboration
        </div>
        <h1>
          Hi, I'm <span className="accent">Urvil Jivani</span>
        </h1>
        <p className="hero-role">
          <b>{profile.role}</b> — {profile.tagline}
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" to="/contact">
            <Icon name="mail" size={17} /> Get in touch
          </Link>
          <Link className="btn btn-ghost" to="/projects">
            View projects <Icon name="arrow" size={17} />
          </Link>
        </div>
      </section>

      <section className="reveal">
        <div className="sec-head">
          <span className="sec-num">/</span>
          <h2>What I do</h2>
        </div>
        <div className="chips">
          {interests.map((i) => (
            <span className="chip" key={i}>
              {i}
            </span>
          ))}
        </div>
      </section>

      <section className="reveal">
        <div className="sec-head">
          <span className="sec-num">/</span>
          <h2>Featured work</h2>
        </div>
        <div className="grid">
          {projects.slice(0, 3).map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="lead center-link">
          <Link to="/projects" className="text-link">
            See all projects <Icon name="arrow" size={15} />
          </Link>
        </p>
      </section>
    </>
  )
}
