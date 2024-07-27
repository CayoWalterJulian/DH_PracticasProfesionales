import React from 'react';
import { FaSearch, FaUserFriends, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-dh.png'; 
import backgroundImage from '../assets/img/banner.jpg'; 

const HomePage = () => {
  return (
    <div className="relative h-screen">

      <div className="absolute inset-0">
        <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-purple-600 bg-opacity-50"></div>
      </div>

      <div className="relative flex flex-col items-center pt-10">
        <img src={logo} alt="Logo" className="w-40 h-auto mb-3 md:w-52 lg:hidden" />

        <h1 className="relative z-10 text-white text-center px-4 mb-8 text-2xl md:text-3xl lg:text-4xl lg:text-justify">
            <span className="lg:hidden">
                Descubre el talento que tu empresa necesita en áreas administrativas, profesionales y técnicas.
            </span>
            <span className="hidden lg:inline">
                Descubre el talento que tu empresa necesita en<br />
                áreas  administrativas,  profesionales y  técnicas.
            </span>
        </h1>

        <div className="flex flex-wrap justify-center w-full px-4 md:space-y-0 md:space-x-4 lg:space-x-4 ">
          <Link to="/search-talent" className="bg-blue-950 flex flex-col items-center justify-center p-4 w-32 h-[240px] md:w-48 md:h-[280px] lg:w-72 lg:h-[400px] lg:bg-black lg:bg-opacity-50">
            <FaSearch className="text-white mb-2 text-3xl md:text-4xl lg:text-7xl" />
            <p className="text-white text-center text-sm md:text-base lg:text-lg">Buscar Talento</p>
          </Link>

          <Link to="/aspirants" className="bg-blue-900 flex flex-col items-center justify-center p-4 w-32 h-[240px] md:w-48 md:h-[280px] lg:w-72 lg:h-[400px] lg:bg-black lg:bg-opacity-50">
            <FaUserFriends className="text-white mb-2 text-3xl md:text-4xl lg:text-7xl" />
            <p className="text-white text-center text-sm md:text-base lg:text-lg">Todos los aspirantes</p>
          </Link>

          <Link to="/formulario" className="bg-blue-950 flex flex-col items-center justify-center p-4 w-32 h-[240px] md:w-48 md:h-[280px] lg:w-72 lg:h-[400px] lg:bg-black lg:bg-opacity-50">
            <FaBriefcase className="text-white mb-2 text-3xl md:text-4xl lg:text-7xl" />
            <p className="text-white text-center text-sm md:text-base lg:text-lg">Postularse</p>
          </Link>
        </div>

        <div className="relative z-10 mt-8 flex justify-center space-x-8">
          <Link to="/login" className="text-white underline uppercase">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="text-white underline uppercase">
            Registrarte
          </Link>
        </div>

      </div>

    </div>
  );
};

export default HomePage;