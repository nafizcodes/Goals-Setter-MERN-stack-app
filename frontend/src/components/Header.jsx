import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa' //font awesome from react icons
import {Link} from 'react-router-dom'  //links to pages


function Header() {
  return (
    <header className='header'>
        <div className = 'logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt/> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser/> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header