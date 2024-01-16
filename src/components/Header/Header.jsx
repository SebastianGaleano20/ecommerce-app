import logo from '../images/logo.jpg'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
       <nav className='barra'>
        <div className='logo'>
          <img src={logo}alt="logo"/>
        </div>
        <div className='links'>
        <NavLink to={'/Home'} >Home</NavLink>
        <NavLink to={'/Registro'}>Register</NavLink>
        <NavLink to={'/Login'} >Login</NavLink>
        </div>
       </nav>
    </div>
  );
};
export default Header;
