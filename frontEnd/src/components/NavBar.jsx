import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/img/logo1-blanco.png';
import { IoIosLogIn } from "react-icons/io";
import { PiUserPlus } from "react-icons/pi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);   

  }, [menuOpen]);

  return (
    <nav className="bg-blue-900 p-4 flex items-center justify-between z-50 fixed w-full">
      <Link to='/'>
        <img src={logo} alt="Logo" className="h-16 lg:ml-10" />
      </Link>

      {/* Contenedor de iconos de menú */}
      <div className="text-white md:hidden z-50" onClick={toggleMenu}>
        {/* Icono de menú */}
        <FaBars className={`transition-transform duration-300 ${menuOpen ? 'transform rotate-90 opacity-0' : 'opacity-100'}`} size={24} />
        {/* Icono de cierre */}
        <FaTimes className={`absolute m-2 top-0 right-0 transition-transform duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 transform -rotate-90'}`} size={24} />
      </div>

      {/* Menú */}
      <ul className={`fixed top-0 right-0 h-[100%] w-2/5 bg-blue-950 md:bg-transparent flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'hidden'} md:static md:flex md:flex-row md:h-auto md:w-auto z-40`}>

        <li className="text-white  font-roboto py-2 md:py-0 md:px-4 cursor-pointer hover:text-lg hover:transform hover:scale-110 transition-all duration-200" onClick={toggleMenu}>
        <ScrollLink to="home" smooth={true} offset={-130} duration={500}>
            Inicio
          </ScrollLink>
        </li>

        <li className="text-white font-roboto py-2 md:py-0 md:px-4 cursor-pointer hover:text-lg hover:transform hover:scale-110 transition-all duration-200" onClick={toggleMenu}>
          <ScrollLink to="about" smooth={true} offset={-60} duration={500}>
            Nosotros
          </ScrollLink>
        </li>

        {/*<li className="text-white py-2 md:py-0 md:px-4 cursor-pointer" onClick={toggleMenu}>
          <Link to="/postulate">Postularse</Link>
        </li>
        <li className="text-white py-2 md:py-0 md:px-4 cursor-pointer" onClick={toggleMenu}>
          <Link to="/aspirants">Candidatos</Link>
        </li>*/}

        <li className="text-white  font-roboto py-2 md:py-0 md:px-4 cursor-pointer hover:text-lg hover:transform hover:scale-110 transition-all duration-200" onClick={toggleMenu}>
          <ScrollLink to="contact" smooth={true} offset={-80} duration={500}>
            Contacto
          </ScrollLink>
        </li>

        <li className="text-white font-roboto py-2 md:py-0 md:px-4 cursor-pointer hover:text-2xl hover:transform hover:scale-110 transition-all duration-200" onClick={toggleMenu}>
          <Link to="/register"><PiUserPlus className="hover:text-3xl transition-all duration-200" size={24} /></Link>
        </li>

        <li className="text-white font-roboto py-2 md:py-0 md:px-4 cursor-pointer hover:text-2xl hover:transform hover:scale-110 transition-all duration-200" onClick={toggleMenu}>
          <Link to="/login"><IoIosLogIn className="hover:text-3xl transition-all duration-200" size={24} /></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;