import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Professions from './Professions';
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineExpandLess } from "react-icons/md";

const About = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="p-3 m-4">
            <div className="text-center  my-3 lg:my-7 bg-about bg-cover bg-center  bg-black opacity-80 flex items-center justify-center  mb-6 lg:mb-16  h-[250px] lg:h-[350px]">
                <div>
                    <h1 className="text-2xl font-poppins font-bold mb-2 text-white pb-2 lg:text-5xl ">SOBRE NOSOTROS</h1>
                    <div className="w-32 h-[2px] bg-white mx-auto mb-4"></div>
                    <h3 className="text-lg font-roboto mb-4 text-white lg:text-xl">30 años de experiencia nos avalan</h3>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                    <div className="p-6">
                        <p className='font-roboto'>
                            <strong className='text-blue-800'>JRH</strong> es una consultora multinacional especializada en <strong className='text-blue-800'>Recursos Humanos</strong> que ofrece soluciones integrales en el ámbito del talento y la gestión de personas.
                            Nuestro objetivo es prestar un <strong className='text-blue-800'>servicio único y de calidad</strong> que ayude a las empresas a mejorar sus resultados de negocio a través de la <strong className='text-blue-800'>gestión del talento</strong>. Nuestra pasión son las personas y, con ellas, convertimos sus retos de hoy en éxitos de mañana.
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <div className="p-5">
                        <div className="mb-4">
                            <div className="flex items-center cursor-pointer pb-1  border-b border-b-gray-400" onClick={() => toggleSection('vision')}>
                                {expandedSection === 'vision' ? <MdOutlineExpandLess className="mr-2 size-7" /> : <FaCirclePlus className="mr-2 size-5 text-gray-600" />}
                                <div className="font-roboto font-bold text-gray-800">Visión</div>
                            </div>
                            {expandedSection === 'vision' && (
                                <div className="mt-2">
                                    <p className='font-roboto'>Nuestro trabajo tiene un sentido, un objetivo. Queremos ser el socio estratégico de nuestros clientes a nivel mundial en soluciones de Recursos Humanos.</p>
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center cursor-pointer pb-1  border-b border-b-gray-400" onClick={() => toggleSection('mission')}>
                                {expandedSection === 'mission' ? <MdOutlineExpandLess className="mr-2 size-7" /> : <FaCirclePlus className="mr-2 size-5 text-gray-600" />}
                                <div className="font-roboto font-bold text-gray-800">Misión</div>
                            </div>
                            {expandedSection === 'mission' && (
                                <div className="mt-2">
                                    <p className='font-roboto'>Aportar soluciones a medida, de calidad y de valor añadido a nuestros clientes en el área de Recursos Humanos, superando sus expectativas y ayudando a mejorar sus resultados de negocio.

                                        Contribuir al desarrollo y realización de nuestros empleados y los de nuestros clientes.</p>
                                </div>
                            )}
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center cursor-pointer pb-1  border-b border-b-gray-400" onClick={() => toggleSection('values')}>
                                {expandedSection === 'values' ? <MdOutlineExpandLess className="mr-2 size-7 " /> : <FaCirclePlus className="mr-2 size-5 text-gray-600" />}
                                <div className="font-roboto font-bold text-gray-800">Valores</div>
                            </div>
                            {expandedSection === 'values' && (
                                <div className="mt-2">
                                    <p className='fonbt-roboto'>Compromiso, Cooperación, Innovacion, Orientacion a resultados y Flexibilidad.-</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            < Professions />
        </div>

    );
};

export default About;