import { profile, interests } from '../data.js'

export default function About() {
  return (
    <section>
      <div className="page-head">
        <span className="sec-num">About</span>
        <h1 className="page-title">A bit about me</h1>
      </div>

      <p className="lead">
        I build intelligent systems at the intersection of research and engineering — today focused on
        AI agents, generative AI, and the large-scale systems that make them reliable in production.
        I care about turning fast-moving AI research into robust, usable software.
      </p>
      <p className="lead">
        I completed my undergraduate studies at {profile.education}, where I began publishing research
        in machine learning and optimization. Today I'm a {profile.role}, based in {profile.location}.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <span className="info-label">Currently</span>
          <span className="info-value">Senior Software Engineer · Microsoft</span>
        </div>
        <div className="info-card">
          <span className="info-label">Education</span>
          <span className="info-value">{profile.education}</span>
        </div>
        <div className="info-card">
          <span className="info-label">Based in</span>
          <span className="info-value">{profile.location}</span>
        </div>
        <div className="info-card">
          <span className="info-label">Focus</span>
          <span className="info-value">AI agents · GenAI · Systems</span>
        </div>
      </div>

      <div className="sec-head mt">
        <span className="sec-num">/</span>
        <h2>Interests</h2>
      </div>
      <div className="chips">
        {interests.map((i) => (
          <span className="chip" key={i}>
            {i}
          </span>
        ))}
      </div>
    </section>
  )
}
