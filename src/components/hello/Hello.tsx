import { Link } from 'react-router-dom'
import './hello.scss'

const Hello = () => {
  return (
    <header>
      <h1>Hello Vite+React app!</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </ul>
    </header>
  )
}

export default Hello
