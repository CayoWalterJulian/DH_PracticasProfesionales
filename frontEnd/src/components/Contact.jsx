import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className=" m-4 p-3">

            <div className="text-center my-2 bg-contact bg-cover bg-center h-[250px] bg-black opacity-75  flex items-center justify-center mb-2">
                <div>
                    <h1 className="text-2xl font-poppins font-bold mb-2 text-white pb-2 lg:text-5xl ">CONTACTO</h1>
                </div>
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row p-3 md:justify-center md:items-center lg:justify-evenly lg:items-start">

                <div className="p-6 shadow-lg w-full h-3/5 mb-2 md:w-4/5 lg:w-2/5">
                    <p className='font-roboto text-lg'>Si tienes alguna consulta o necesitas más información sobre alguna de nuestras soluciones, no dudes en contactar con nosotros.</p>
                    <div className="mb-4 mt-4">
                        <div className='flex items-center mb-2'>
                            <IoLocationSharp className='text-blue-400' />
                            <p className="text-gray-700 ml-1"> Belgrano 135, San Salvador de Jujuy, Argentina</p>
                        </div>
                        <div className='flex items-center'>
                            <MdEmail className='text-blue-400' />
                            <p className="text-gray-700 ml-1 mb-2"> contacto@jrh.com</p>
                        </div>
                        <div className='flex items-center'>
                            <FaPhoneAlt className='text-blue-400' />
                            <p className="text-gray-700 ml-1 mb-2"> +54 388 111111</p>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-300 p-6 rounded-lg shadow-lg w-full md:w-4/5 lg:w-2/5">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Nombre</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Correo Electrónico</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Tu correo electrónico"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Mensaje</label>
                            <textarea
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Tu mensaje"
                                rows="4"
                            />
                        </div>

                        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                            Enviar
                        </button>
                        
                    </form>
                </div>

            </div>


        </div>
    );
};

export default Contact;