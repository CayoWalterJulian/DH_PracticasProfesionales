import React from 'react';
import icon_picture from "../assets/images/icon-picture.png";
import image_form from "../assets/images/image-form.png";
import { CgProfile } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";

const Form_aspirante = () => {
  return (
    <form className='p-4 pt-8 max-w-screen-lg mx-auto'>
      <div className="space-y-6">
        <div className='relative'>
          <img src={image_form} alt="image_form" className="rounded-xl w-full h-full object-cover" />

          <p className='absolute text-white rounded-xl inset-0 flex items-center justify-center  bg-gray-800 bg-opacity-40 text-md sm:text-xl md:text-3xl lg:text-4xl px-8 '>Completa el formulario y encontra el trabajo que deseas con un solo click</p>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 flex items-center">Formulario de registro <CgProfile className='text-2xl ml-2' /></h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 italic">Los campos con <span className='text-red-400'>*</span> son obligatorios</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Apellido <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="last-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dni" className="block text-sm font-medium leading-6 text-gray-900">
                DNI <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="dni"
                  name="dni"
                  type="text"
                  autoComplete="dni"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                Telefono <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  autoComplete="phone-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Pais de recidencia <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2 relative">
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option selected disabled>Seleccionar...</option>
                  <option value="argentina">Argentina</option>
                  <option value="bahamas">Bahamas</option>
                  <option value="barbados">Barbados</option>
                  <option value="belize">Belize</option>
                  <option value="bolivia">Bolivia</option>
                  <option value="brazil">Brazil</option>
                  <option value="canada">Canada</option>
                  <option value="chile">Chile</option>
                  <option value="colombia">Colombia</option>
                  <option value="costa_rica">Costa Rica</option>
                  <option value="cuba">Cuba</option>
                  <option value="dominica">Dominica</option>
                  <option value="dominican_republic">Dominican Republic</option>
                  <option value="ecuador">Ecuador</option>
                  <option value="el_salvador">El Salvador</option>
                  <option value="grenada">Grenada</option>
                  <option value="guatemala">Guatemala</option>
                  <option value="guyana">Guyana</option>
                  <option value="haiti">Haiti</option>
                  <option value="honduras">Honduras</option>
                  <option value="jamaica">Jamaica</option>
                  <option value="mexico">Mexico</option>
                  <option value="nicaragua">Nicaragua</option>
                  <option value="panama">Panama</option>
                  <option value="paraguay">Paraguay</option>
                  <option value="peru">Peru</option>
                  <option value="saint_kitts_and_nevis">Saint Kitts and Nevis</option>
                  <option value="saint_lucia">Saint Lucia</option>
                  <option value="saint_vincent_and_the_grenadines">Saint Vincent and the Grenadines</option>
                  <option value="suriname">Suriname</option>
                  <option value="trinidad_and_tobago">Trinidad and Tobago</option>
                  <option value="united_states">United States</option>
                  <option value="uruguay">Uruguay</option>
                  <option value="venezuela">Venezuela</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="url-linkedin" className="block text-sm font-medium leading-6 text-gray-900">
                Perfil Linkedin
              </label>
              <div className="mt-2">
                <input
                  id="url-linkedin"
                  name="url-linkedin"
                  type="text"
                  autoComplete="url-linkedin"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="birthdate" className="block text-sm font-medium leading-6 text-gray-900">
                Fecha nacimiento <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2">
                <input
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  autoComplete="birthdate"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Genero <span className="text-red-400">*</span>
              </label>
              <div className="mt-2 relative">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option selected disabled>Seleccionar...</option>
                  <option value="female">Femenino</option>
                  <option value="male">Masculino</option>
                  <option value="other">Otro</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="profession" className="block text-sm font-medium leading-6 text-gray-900">
                Profesión <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2 relative">
                <select
                  id="profession"
                  name="profession"
                  autoComplete="profession"
                  className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="doctor">Doctor</option>
                  <option value="engineer">Ingeniero</option>
                  <option value="teacher">Maestro</option>
                  <option value="lawyer">Abogado</option>
                  <option value="nurse">Enfermero</option>
                  <option value="architect">Arquitecto</option>
                  <option value="scientist">Científico</option>
                  <option value="artist">Artista</option>
                  <option value="chef">Chef</option>
                  <option value="journalist">Periodista</option>
                  <option value="mechanic">Mecánico</option>
                  <option value="pilot">Piloto</option>
                  <option value="programmer">Programador</option>
                  <option value="photographer">Fotógrafo</option>
                  <option value="dentist">Dentista</option>
                  <option value="pharmacist">Farmacéutico</option>
                  <option value="plumber">Fontanero</option>
                  <option value="electrician">Electricista</option>
                  <option value="carpenter">Carpintero</option>
                  <option value="accountant">Contador</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="preference-area" className="block text-sm font-medium leading-6 text-gray-900">
                Area de preferencia <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2 relative">
                <select
                  id="preference-area"
                  name="preference-area"
                  autoComplete="preference-area"
                  className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="technology">Tecnología</option>
                  <option value="healthcare">Salud</option>
                  <option value="education">Educación</option>
                  <option value="finance">Finanzas</option>
                  <option value="engineering">Ingeniería</option>
                  <option value="law">Derecho</option>
                  <option value="arts">Artes</option>
                  <option value="science">Ciencia</option>
                  <option value="hospitality">Hostelería</option>
                  <option value="media">Medios de Comunicación</option>
                  <option value="construction">Construcción</option>
                  <option value="sales">Ventas</option>
                  <option value="marketing">Marketing</option>
                  <option value="human_resources">Recursos Humanos</option>
                  <option value="logistics">Logística</option>
                  <option value="real_estate">Bienes Raíces</option>
                  <option value="administration">Administración</option>
                  <option value="transportation">Transporte</option>
                  <option value="public_services">Servicios Públicos</option>
                  <option value="it">Tecnologías de la Información</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="idioma" className="block text-sm font-medium leading-6 text-gray-900">
                Idioma <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2 relative">
                <select
                  id="idioma"
                  name="idioma"
                  autoComplete="idioma"
                  className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option selected disabled>Seleccionar...</option>
                  <optgroup label='Ingles'>
                    <option value="english_basic">Básico</option>
                    <option value="english_intermediate">Intermedio</option>
                    <option value="english_advanced">Avanzado</option>
                  </optgroup>

                  <optgroup label='Español'>
                    <option value="spanish_basic">Español - Básico</option>
                    <option value="spanish_intermediate">Español - Intermedio</option>
                    <option value="spanish_advanced">Español - Avanzado</option>
                  </optgroup>

                  <optgroup label='Francés'>
                    <option value="french_basic">Francés - Básico</option>
                    <option value="french_intermediate">Francés - Intermedio</option>
                    <option value="french_advanced">Francés - Avanzado</option>
                  </optgroup>

                  <optgroup label='Portugués'>
                    <option value="portuguese_basic">Portugués - Básico</option>
                    <option value="portuguese_intermediate">Portugués - Intermedio</option>
                    <option value="portuguese_advanced">Portugués - Avanzado</option>
                  </optgroup>

                  <optgroup label='Chino'>
                    <option value="chinese_basic">Chino - Básico</option>
                    <option value="chinese_intermediate">Chino - Intermedio</option>
                    <option value="chinese_advanced">Chino - Avanzado</option>
                  </optgroup>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="study-level" className="block text-sm font-medium leading-6 text-gray-900">
                Nivel de estudio <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2 relative">
                <select
                  id="study-level"
                  name="study-level"
                  autoComplete="study-level"
                  className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="" selected disabled>Seleccionar...</option>
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                  <option value="bachillerato">Bachillerato</option>
                  <option value="tecnico">Técnico</option>
                  <option value="licenciatura">Licenciatura</option>
                  <option value="maestria">Maestría</option>
                  <option value="doctorado">Doctorado</option>
                  <option value="postdoctorado">Postdoctorado</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="time-availability" className="block text-sm font-medium leading-6 text-gray-900">
                Tiempo disponible <span className='text-red-400'>*</span>
              </label>
              <div className="mt-2 relative">
                <select
                  id="time-availability"
                  name="time-availability"
                  autoComplete="time-availability"
                  className="block w-full appearance-none rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="" selected disabled>Seleccionar...</option>
                  <option value="full_time">Tiempo completo</option>
                  <option value="part_time">Tiempo parcial</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <RiArrowDownSLine className='h-5 w-5 text-gray-400' />
                </div>
              </div>
            </div>          

            <div className="sm:col-span-3">
              <label htmlFor="cv-pdf" className="block text-sm font-medium leading-6 text-gray-900">
                Curriculum
              </label>
              <div className="mt-2 flex justify-center items-center">
                <input
                  id="cv-pdf"
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="block w-full text-gray-900 sm:text-sm sm:leading-6 py-1"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="picture-profile-container" className="block text-sm font-medium leading-6 text-gray-900">
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <img src={icon_picture} aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="picture-profile"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Cargar una imagen</span>
                      <input
                        id="picture-profile"
                        name="picture-profile"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        className="sr-only" />
                    </label>
                    <p className="pl-1">o arrástrala y suéltala</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, JPEG hasta 10MB</p>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>

      

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default Form_aspirante;