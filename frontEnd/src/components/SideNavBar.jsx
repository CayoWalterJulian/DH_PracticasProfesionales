import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/img/logo-dh.png';
import { Link } from 'react-router-dom';

const SideNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative z-50">
      <div className="bg-blue-900 p-4 flex items-center justify-between">
        <div className="text-white z-50" onClick={toggleMenu}>
          <FaBars className={`transition-transform duration-300 ${menuOpen ? 'hidden' : 'block'}`} size={24} />
          <FaTimes className={`transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'}`} size={24} />
        </div>
      </div>

      {/* Línea azul cuando el menú está cerrado */}
      {!menuOpen && <div className="w-20 h-screen bg-blue-900 fixed top-0 left-0 z-40" />}

      <div className={`fixed top-0 left-0 h-screen bg-blue-900 flex flex-col items-start justify-start p-4 transform transition-transform duration-300 ease-in-out z-40 ${menuOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'}`}>
        <ul className={`w-full ${menuOpen ? 'block' : 'hidden'}`}>
          <li className="py-2 cursor-pointer">
            <Link to='./'>
              <img src={logo} alt="Logo" className="logo h-10 w-auto mt-10 mb-4" />
            </Link>
          </li>
          <li className="text-white py-2 cursor-pointer" onClick={handleLinkClick}>
            <Link to="/search-talent">Buscar talento</Link>
          </li>
          <li className="text-white py-2 cursor-pointer" onClick={handleLinkClick}>
            <Link to="/postulate">Postularse</Link>
          </li>
          <li className="text-white py-2 cursor-pointer" onClick={handleLinkClick}>
            <Link to="/aspirants">Todos los aspirantes</Link>
          </li>
          <li className="text-white py-2 cursor-pointer" onClick={handleLinkClick}>
            Profesiones
          </li>
          <li className="text-white py-2 cursor-pointer" onClick={handleLinkClick}>
            Empresas
          </li>
          <li className="text-white py-2 cursor-pointer" onClick={handleLinkClick}>
            Contacto
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
