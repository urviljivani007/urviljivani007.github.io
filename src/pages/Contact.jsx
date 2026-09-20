import { profile, socials } from '../data.js'
import { Icon } from '../components/Icons.jsx'

export default function Contact() {
  return (
    <section className="contact">
      <div className="page-head">
        <span className="sec-num">Contact</span>
        <h1 className="page-title">Let's connect</h1>
      </div>

      <p className="lead">
        Interested in research, collaboration, or just want to say hi? Reach out anytime.
      </p>

      <a className="email-pill" href={`mailto:${profile.email}`}>
        <Icon name="mail" size={18} /> {profile.email}
      </a>

      <div className="social-row">
        {socials
          .filter((s) => s.icon !== 'mail')
          .map((s) => (
            <a
              key={s.name}
              className="social-card"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={s.icon} size={22} />
              <span>{s.name}</span>
            </a>
          ))}
      </div>
    </section>
  )
}
