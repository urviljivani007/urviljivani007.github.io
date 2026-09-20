import { socials } from '../data.js'
import { Icon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="social">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target={s.url.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              title={s.name}
              aria-label={s.name}
            >
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Urvil Jivani · Built with React</p>
      </div>
    </footer>
  )
}
