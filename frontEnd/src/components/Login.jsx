import React from 'react';
import image_form from "../assets/images/image-form.png";
import { CgProfile } from "react-icons/cg";
import logo_arh from "../assets/images/logo-arh.png";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='purple'>
      <form className='p-4 pt-8 max-w-screen-lg mx-auto'>
        <div className="space-y-6">
          <div className='relative'>
            <img src={image_form} alt="image_form" className="rounded-xl w-full h-full object-cover" />

            <div className='absolute inset-0 flex items-center justify-center rounded-xl bg-gray-800 bg-opacity-40 px-4'>
              <p className='text-white text-md sm:text-xl md:text-3xl mr-4'>Descubre el trabajo que deseas con un solo <span className="font-semibold">click</span></p>

              <img src={logo_arh} alt="logo_arh" className='w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 xl:w-48 xl:h-24 object-contain' />
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 flex items-center">Formulario de Ingreso <CgProfile className='text-2xl ml-2' /></h2>

            <p className="mt-1 text-sm leading-6 text-gray-600 italic">Los campos con asterisco (<span className='text-red-400'>*</span>) son obligatorios</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña <span className='text-red-400'>*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo <span className='text-red-400'>*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link type="button" className="text-sm font-semibold leading-6 text-gray-900" to='/'>
            Cancelar
          </Link>
          <button
            type="submit"
            className="rounded-md blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login