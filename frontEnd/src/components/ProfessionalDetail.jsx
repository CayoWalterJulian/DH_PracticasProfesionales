import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const professionalExample = {
  firstName: "Juan",
  lastName: "Pérez",
  email: "juan.perez@example.com",
  dni: "12345678",
  phone: "123-456-7890",
  linkedin: "https://www.linkedin.com/in/juan-perez",
  birthDate: "1985-05-15",
  profession: "Ingeniero de Software",
  photo: "https://www.modelos-de-curriculum.com/wp-content/uploads/2020/10/foto-para-curriculum-vitae.jpg",
  banner: "https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Blank.png"
};

const ProfessionalDetail = ({ professional = professionalExample }) => {
  return (
    <div className="bg-[#d8cfc4] p-6 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Detalles del Profesional</h1>

        <div className="relative bg-gray-300 h-40 rounded-t-lg mb-4">
          <img src={professional.banner} alt="Banner" className="w-full h-full object-cover rounded-t-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={professional.photo}
              alt="Professional"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white absolute bottom-[-20%] left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold">{professional.firstName} {professional.lastName}</h2>
          <p className="text-gray-600">{professional.profession}</p>
        </div>

        <div className="mt-6 space-y-4">
          <p><span className="font-semibold">Email:</span> {professional.email}</p>
          <p><span className="font-semibold">DNI:</span> {professional.dni}</p>
          <p><span className="font-semibold">Teléfono:</span> {professional.phone}</p>
          <p><span className="font-semibold">Fecha de Nacimiento:</span> {professional.birthDate}</p>
          <p><span className="font-semibold">Perfil de LinkedIn:</span></p>
          <a
            href={professional.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center"
          >
            <FaLinkedin className="mr-2" />
            {professional.linkedin}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetail;