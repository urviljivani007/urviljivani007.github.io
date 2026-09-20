import { useEffect, useState } from 'react'
import { Icon } from './Icons.jsx'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore private-mode storage errors */
    }
  }, [theme])

  return (
    <button
      className="theme-btn"
      onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      aria-label="Toggle color theme"
      title="Toggle theme"
    >
      <Icon name={theme === 'light' ? 'moon' : 'sun'} size={19} />
    </button>
  )
}
