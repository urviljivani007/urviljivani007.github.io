import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top whenever the route changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return (
    <div className="app">
      <div className="bg-glow" aria-hidden />
      <Navbar />
      <main className="wrap page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
