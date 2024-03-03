// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <nav>
      <div className="wave_logo_container">
        <img
          className="nav_logo"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <ul>
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
