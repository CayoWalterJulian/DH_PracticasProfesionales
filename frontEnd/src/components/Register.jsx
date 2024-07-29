import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

function Register({ setIsAuthenticated, isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Aquí puedes agregar la lógica para manejar el registro
    setIsAuthenticated(true); // Simulación de registro exitoso
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d8cfc4]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Nombre de Usuario <span className='text-red-400'>*</span>
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 px-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico <span className='text-red-400'>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 px-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirmar Contraseña <span className='text-red-400'>*</span>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6 px-2"
              required
            />
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link type="button" className="text-sm font-semibold leading-6 text-gray-900" to='/'>
              Cancelar
            </Link>
            <button
              type="submit"
              className="rounded-md blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

{/*import React from 'react';
import image_form from "../assets/images/image-form.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa";
import logo_arh from "../assets/images/logo-arh.png";
import { Link } from 'react-router-dom';function Register() {
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
            <h2 className="text-base font-semibold leading-7 text-gray-900 flex items-center">Formulario de Registro <FaWpforms className='text-2xl ml-2' /></h2>

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

              <div className="sm:col-span-3">
                <label htmlFor="rol" className="block text-sm font-medium leading-6 text-gray-900">
                  Rol <span className="text-red-400">*</span>
                </label>
                <div className="mt-2 relative">
                  <select
                    id="rol"
                    name="rol"
                    autoComplete="rol"
                    className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
                  >
                    <option selected disabled>Seleccionar...</option>
                    <option value="postulate">Postulante</option>
                    <option value="enterprise">Empresa</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                  </div>
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
            Registrarse
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register;*/}
