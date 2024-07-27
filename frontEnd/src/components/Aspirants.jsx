import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillInfoCircleFill } from "react-icons/bs";

import { Link } from 'react-router-dom';

const aspirantsData = [
  {
    id: 1,
    name: "Juan Perez",
    profession: "Profesión 1",
    banner: "https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Blank.png", 
    photo: "https://www.modelos-de-curriculum.com/wp-content/uploads/2020/10/foto-para-curriculum-vitae.jpg",
    email: "36350945@fi.unju.edu.ar"
  },
  {
    id: 2,
    name: "Nombre del Aspirante 2",
    profession: "Profesión 2",
    banner: "https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Blank.png", 
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k2zHErZ3RQ8BvyFjdZxsgsFp1tasas-nZA&s",
    email: "36350945@fi.unju.edu.ar" 
  },
  {
    id: 3,
    name: "Nombre del Aspirante 2",
    profession: "Profesión 2",
    banner: "https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Blank.png", 
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k2zHErZ3RQ8BvyFjdZxsgsFp1tasas-nZA&s",
    email: "36350945@fi.unju.edu.ar" 
  },
  {
    id: 4,
    name: "Nombre del Aspirante 2",
    profession: "Profesión 2",
    banner: "https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Blank.png", 
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k2zHErZ3RQ8BvyFjdZxsgsFp1tasas-nZA&s",
    email: "36350945@fi.unju.edu.ar" 
  }
];

const Aspirants = () => {
  return (
    <div className="bg-[#d8cfc4] p-4 min-h-screen">
      <h1 className="text-left text-2xl font-bold mb-4">Todos los aspirantes</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {aspirantsData.map((aspirant, index) => (

          <div key={aspirant.id}  className="bg-white p-4 rounded-lg shadow-lg flex flex-col  w-48 h-[240px] md:w-64 md:h-[310px] lg:w-72 lg:h-[320px]">
            
            <div className="relative bg-gray-300 h-[30%] rounded-t-lg mb-4">
              <img src={aspirant.banner} alt="Banner" className="w-full h-full object-cover rounded-t-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={aspirant.photo} alt="Aspirante" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-4  border-white absolute bottom-[-50%] left-1/2 transform -translate-x-1/2" />
                <Link to={`mailto:${aspirant.email}`}  className="absolute left-2 md:left-4 top-1/2 transform -translate-y-[-50px] md:-translate-y-[-60px] text-gray-500">
                  <FaEnvelope size={20} />
                </Link>
                <Link to={`/professional/${aspirant.id}`} className="absolute right-2 md:right-4 top-1/2 transform -translate-y-[-50px] md:-translate-y-[-60px] text-gray-500">
                  <BsFillInfoCircleFill size={20} />
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="font-bold mt-8 md:mt-10 lg:mt-12 ">{aspirant.name}</p>
              <p className="text-gray-500 mt-2 md:mt-4 lg:mt-4">{aspirant.profession}</p>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Aspirants;