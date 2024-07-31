import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CiStar } from 'react-icons/ci';

const Aspirants = () => {
  const [aspirantsData, setAspirantsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/aspirants/');

        console.log(response.data.aspirant);

        setAspirantsData(response.data.aspirant);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#d8cfc4] p-4 min-h-screen">
      <h1 className="text-left text-2xl font-bold mb-4 flex justify-center text-gray-800 md:text-3xl lg:text-4xl">Todos los aspirantes</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {aspirantsData.map((aspirant) => (
          <Link to={`/professional/${aspirant.DNI}`} key={aspirant.DNI} className="bg-white p-4 rounded-lg shadow-lg flex flex-col w-48 h-[240px] md:w-64 md:h-[310px] lg:w-72 lg:h-[320px]">
            <div className="relative bg-gray-300 h-[30%] rounded-t-lg mb-4">
              <img src="https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Blank.png" alt="Banner" className="w-full h-full object-cover rounded-t-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={aspirant.image} alt="Aspirante" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-4 border-white absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 object-cover" />
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold mt-8 md:mt-10 lg:mt-12">{aspirant.name} {aspirant.lastname}</p>
              <p className="text-gray-600 mt-2 md:mt-4 lg:mt-4">{aspirant.profession}</p>
            </div>
            <div className='flex justify-center mt-2 md:mt-6'>
              <CiStar className='size-4 md:size-5 text-gray-500' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Aspirants;