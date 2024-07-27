import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/img/logo-dh.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-900 p-4 flex items-center justify-between z-50 relative">
      <Link to='/'>
        <img src={logo} alt="Logo" className="h-8" />
      </Link>

      {/* Contenedor de iconos de menú */}
      <div className="text-white md:hidden z-50" onClick={toggleMenu}>
        {/* Icono de menú */}
        <FaBars className={`transition-transform duration-300 ${menuOpen ? 'transform rotate-90 opacity-0' : 'opacity-100'}`} size={24} />
        {/* Icono de cierre */}
        <FaTimes className={`absolute m-2 top-0 left-0 transition-transform duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 transform -rotate-90'}`} size={24} />
      </div>

      {/* Menú */}
      <ul className={`fixed top-0 left-0 h-screen w-full bg-blue-900 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'hidden'} md:static md:flex md:flex-row md:h-auto md:w-auto z-40`}>
        <li className="text-white py-2 md:py-0 md:px-4 cursor-pointer" onClick={toggleMenu}>
          <Link to="/search-talent">Buscar talento</Link>
        </li>
        <li className="text-white py-2 md:py-0 md:px-4 cursor-pointer" onClick={toggleMenu}>
          <Link to="/postulate">Postularse</Link>
        </li>
        <li className="text-white py-2 md:py-0 md:px-4 cursor-pointer" onClick={toggleMenu}>
          <Link to="/aspirants">Todos los aspirantes</Link>
        </li>
        <li className="text-white py-2 md:py-0 md:px-4 cursor-pointer" onClick={toggleMenu}>
          Contacto
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;