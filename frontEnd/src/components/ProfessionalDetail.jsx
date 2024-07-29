
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GiGraduateCap } from "react-icons/gi";
import { FaBriefcase } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaLightbulb } from "react-icons/fa6";
import axios from 'axios';

// const professionalExample = {
//     firstName: "Juan",
//     lastName: "Pérez",
//     email: "juan.perez@example.com",
//     phone: "123-456-7890",
//     linkedin: "https://www.linkedin.com/in/juan-perez",
//     profession: "Ingeniero de Software",
//     photo: "https://www.modelos-de-curriculum.com/wp-content/uploads/2020/10/foto-para-curriculum-vitae.jpg",
//     banner: "https://media.sproutsocial.com/uploads/LinkedIn-Personal2B-Design.jpg",
//     education: [
//         {
//             id: 1,
//             institution: 'Universidad Nacional',
//             degree: 'Ingenieria de Software',
//             startDate: '2015-01-01',
//             endDate: '2019-12-31'
//         },
//         {
//             id: 2,
//             institution: 'Instituto Tecnológico',
//             degree: 'Diplomado en Desarrollo Web',
//             startDate: '2020-01-01',
//             endDate: '2020-06-30'
//         }
//     ],
//     experience: [
//         {
//             id: 1,
//             company: 'Tech Solutions S.A.',
//             position: 'Desarrollador de Software',
//             startDate: '2019-01-01',
//             endDate: '2021-05-31',
//             description: 'Desarrollé y mantuve aplicaciones web utilizando tecnologías como React, Node.js y MongoDB. Participé en el diseño y la implementación de soluciones de software a medida para clientes.'
//         },
//         {
//             id: 2,
//             company: 'Innovatech',
//             position: 'Ingeniero de Datos',
//             startDate: '2021-06-01',
//             endDate: '2023-04-30',
//             description: 'Trabajé en el análisis y la integración de grandes volúmenes de datos. Implementé pipelines de datos utilizando herramientas como Apache Spark y AWS.'
//         },
//     ],
//     languages: [
//         {
//             id: 1,
//             language: 'Español',
//             level: 'Nativo'
//         },
//         {
//             id: 2,
//             language: 'Inglés',
//             level: 'Avanzado'
//         },
//         {
//             id: 3,
//             language: 'Francés',
//             level: 'Intermedio'
//         }
//     ],
//     workAreas: [
//         {
//             id: 1,
//             area: "Desarrollo de Software",
//         },
//         {
//             id: 2,
//             area: "Análisis de Datos",
//         },
//         {
//             id: 3,
//             area: "Gestión de Proyectos",
//         },
//         {
//             id: 4,
//             area: "Ciberseguridad",
//         },
//         {
//             id: 5,
//             area: "Diseño UX/UI",
//         },
//     ]

// };



const ProfessionalDetail = () => {

    const { DNI } = useParams(); // Asegúrate de que el DNI está siendo obtenido correctamente
    const [aspirant, setAspirant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAspirant = async () => {
            try {
                console.log(`Fetching data for DNI: ${DNI}`); // Verifica el DNI
                const response = await axios.get(`http://localhost:3001/api/aspirants/${DNI}`);
                console.log(response.data); // Verifica los datos de la respuesta
    
                if (response.data && response.data.aspirant) {
                    setAspirant(response.data.aspirant);
                } else {
                    setError('Data format is incorrect');
                }
            } catch (error) {
                console.error('Error fetching the aspirant details', error);
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
    
        fetchAspirant();
    }, [DNI]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    if (!aspirant) return <div>No data available</div>;


    return (
        <div className='flex justify-center'>
            <div className="m-2 p-1 max-w-7xl">

                {/*Foto de Perfil*/}
                <div className="relative bg-gray-300 h-40 rounded-t-lg mb-4 ">
                    <img src="https://media.sproutsocial.com/uploads/5D-LinkedIn-Personal-Blank.png" alt="Banner" className="w-full h-full object-cover rounded-t-lg" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img
                            src={aspirant.image}
                            alt="Professional"
                            className="w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full border-4 border-white absolute bottom-[-30%] left-1/2 transform -translate-x-1/2 md:bottom-[-40%] lg:bottom-[-40%] object-cover"
                        />
                    </div>
                </div>
                {/*Nombre y apellido, profesion */}
                <div className=" p-1 mt-12 text-center md:mt-16 lg:mt-20 ">
                    <h2 className="font-roboto font-bold text-2xl md:text-3xl lg:text-4xl">{aspirant.name} {aspirant.lastname}</h2>
                    <p className="font-roboto text-gray-600 text-base md:text-lg lg:text-xl">{aspirant.profession}</p>
                </div>



                {/*INFORMACION GENERAL */}
                <div className="flex flex-col lg:flex-row">

                    <div className="p-3 flex-1 mb-0 lg:mb-0 lg:mr-4">

                        {/*Experiencia Laboral*/}
                        <div className='border  rounded-md  bg-gray-300 mt-2 mb-7 p-4'>
                            <div className='flex items-center mb-4'>
                                <FaBriefcase className='text-[20px]' />
                                <h2 className='font-roboto ml-2 font-bold  text-gray-800'>EXPERIENCIA LABORAL</h2>
                            </div>

                            {/* <ul className='space-y-4'>
                                {aspirantsData.experience.map((exp) => (
                                    <li key={exp.id} className='border border-gray-300 p-3 rounded-md shadow-sm bg-white'>
                                        <h3 className='text-lg font-semibold text-gray-800'>{exp.company}</h3>
                                        <p className='text-gray-600'>{exp.position}</p>
                                        <p className='text-gray-500'>{exp.startDate} a {exp.endDate}</p>
                                        <p className='text-gray-700'>{exp.description}</p>
                                    </li>
                                ))}
                            </ul> */}
                        </div>

                        {/*Educacion*/}
                        <div className='border rounded-md bg-gray-300 mt-2 mb-2 p-4'>
                            <div className='flex items-center mb-4'>
                                <GiGraduateCap className='text-[30px]' />
                                <h2 className='font-roboto ml-2 font-bold text-gray-800'>EDUCACIÓN</h2>
                            </div>

                            {/* <ul className='space-y-4'>
                                {aspirantsData.education.map((edu) => (
                                    <li key={edu.id} className='border border-gray-300 p-3 rounded-md shadow-sm bg-white'>
                                        <h3 className='text-lg font-semibold text-gray-800'>{edu.institution}</h3>
                                        <p className='text-gray-600'>
                                            {edu.degree} <br />
                                            <span className='text-gray-500'>{edu.startDate} - {edu.endDate}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul> */}
                        </div>

                    </div>

                    <div className="p-3 flex-1">
                        {/*Areas de Interes*/}
                        <div className='border rounded-md  bg-gray-300 mt-2 mb-7 p-4'>
                            <div className='flex items-center mb-4'>
                                <FaLightbulb className='text-[20px]' />
                                <h2 className='font-roboto ml-2 font-bold  text-gray-800'>ÁREAS DE INTERÉS</h2>
                            </div>
                            {/* <ul className='space-y-4 m-4'>
                                <li className='border border-gray-300 p-3 rounded-md shadow-sm bg-white'>
                                    <ul className='list-disc list-inside'>
                                        {aspirantsData.workAreas.map((area) => (
                                            <li key={area.id} className='text-gray-800'>{area.area}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul> */}
                        </div>


                        {/*Idiomas*/}
                        <div className='border rounded-md  bg-gray-300 mt-2 mb-7 p-4'>
                            <div className='flex items-center mb-4'>
                                <MdLanguage className='text-[24px]' />
                                <h2 className='font-roboto ml-2 font-bold  text-gray-800'>IDIOMAS</h2>
                            </div>
                            {/* <ul className='space-y-4'>
                                {aspirantsData.languages.map((lan) => (
                                    <li key={lan.id} className='border border-gray-300 p-3 rounded-md shadow-sm bg-white'>
                                        <h3 className='text-lg font-semibold text-gray-800'>{lan.language}</h3>
                                        <p className='text-gray-600'>{lan.level}</p>
                                    </li>
                                ))}
                            </ul> */}
                        </div>

                        {/*Contacto*/}
                        <div className='border rounded-md  bg-gray-300 mt-2 mb-7 p-4'>
                            <div className='flex items-center mb-4'>
                                <IoIosContact className='text-[28px]' />
                                <h2 className='font-roboto ml-2 font-bold  text-gray-800'>CONTACTO</h2>
                            </div>

                            <div className='border border-gray-300 p-3 rounded-md shadow-sm bg-white'>
                                <p className='text-gray-800 mb-1 flex items-center'>
                                    <a
                                        href={`mailto:${aspirant.email}`}
                                        className="text-blue-600 hover:underline flex items-center ml-2"
                                    >
                                        <FaEnvelope className="mr-2" />
                                        {aspirant.email}
                                    </a>
                                </p>
                                <p className='text-gray-800 mb-1 flex items-center'>
                                    <a
                                        href={`https://wa.me/${aspirant.phone}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline flex items-center ml-2"
                                    >
                                        <FaPhone className="mr-2" />
                                        {aspirant.phone}
                                    </a>
                                </p>
                                <a
                                    href={aspirant.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline flex items-center ml-2"
                                >
                                    <FaLinkedin className="mr-2" />
                                    {aspirant.linkedin}
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfessionalDetail;