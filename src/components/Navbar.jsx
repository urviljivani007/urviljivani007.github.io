import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span>Urvil Jivani</span>
        </NavLink>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? 'bar bar1 open' : 'bar bar1'} />
          <span className={open ? 'bar bar2 open' : 'bar bar2'} />
          <span className={open ? 'bar bar3 open' : 'bar bar3'} />
        </button>

        <div className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
