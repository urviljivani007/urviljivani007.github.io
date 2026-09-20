import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="notfound">
      <h1 className="big-404">404</h1>
      <p className="lead">This page wandered off. Let's get you back.</p>
      <Link className="btn btn-primary" to="/">
        Back home
      </Link>
    </section>
  )
}
