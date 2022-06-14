import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <span>Header</span>
      <div>
        <span>
          <Link to='/'>Home</Link>
        </span>
        <span>
          <Link to='/UserForm'>UserForm</Link>
        </span>
      </div>
    </div>
  )
}

export default Header