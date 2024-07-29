import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Login({ setIsAuthenticated, isAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen purple">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mt-20">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico <span className='text-red-400'>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 px-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña <span className='text-red-400'>*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 px-2"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar sesión
            </button>
            <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
              Cancelar
            </Link>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">
            ¿No tienes una cuenta? <Link to="/register" className="text-blue-500 hover:text-blue-800">Regístrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

{/*import React from 'react';
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

export default Login; */}
