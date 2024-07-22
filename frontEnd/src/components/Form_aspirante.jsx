import React from 'react';
import icon_user from "../assets/images/icon-user.png";
import icon_picture from "../assets/images/icon-picture.png";

const Form_aspirante = () => {
  return (
    <form className='p-5'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Cuenta</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Usuario
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>          

            <div className="sm:col-span-3">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
              </div>
            </div>

            <div className="max-w-sm mb-5">
              <label htmlFor="hs-toggle-password-with-checkbox" className="block text-sm mb-2 dark:text-white">Current password</label>
              <input id="hs-toggle-password-with-checkbox" type="password" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter current password" value="12345qwerty" />

              <div className="flex mt-4">
                <input data-hs-toggle-password='{
                    "target": "#hs-toggle-password-with-checkbox"
                  }' id="hs-toggle-password-checkbox" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                <label htmlFor="hs-toggle-password-checkbox" className="text-sm text-gray-500 ms-3 dark:text-neutral-400">Show password</label>
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Informacion Personal</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre
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
                Apellido
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
                Correo
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
              <label htmlFor="dni" className="block text-sm font-medium leading-6 text-gray-900">
                DNI
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
                Telefono
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
                Pais de recidencia
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                >
                  <option value="" selected disabled>Seleccione un pais</option>
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
                Fecha nacimiento
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
                Genero
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                >
                  <option selected disabled>Seleccione su genero</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="profession" className="block text-sm font-medium leading-6 text-gray-900">
                Profesión
              </label>
              <div className="mt-2">
                <select
                  id="profession"
                  name="profession"
                  autoComplete="profession"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                >
                  <option value="" selected disabled>Seleccione una profeción</option>
                  <option value="software_engineer">Software Engineer</option>
                  <option value="web_developer">Web Developer</option>
                  <option value="data_scientist">Data Scientist</option>
                  <option value="system_administrator">System Administrator</option>
                  <option value="network_engineer">Network Engineer</option>
                  <option value="cloud_architect">Cloud Architect</option>
                  <option value="cyber_security_specialist">Cyber Security Specialist</option>
                  <option value="database_administrator">Database Administrator</option>
                  <option value="mobile_app_developer">Mobile App Developer</option>
                  <option value="devops_engineer">DevOps Engineer</option>
                  <option value="ux_ui_designer">UX/UI Designer</option>
                  <option value="game_developer">Game Developer</option>
                  <option value="it_support_specialist">IT Support Specialist</option>
                  <option value="ai_ml_engineer">AI/ML Engineer</option>
                  <option value="technical_writer">Technical Writer</option>
                  <option value="blockchain_developer">Blockchain Developer</option>
                  <option value="robotics_engineer">Robotics Engineer</option>
                  <option value="full_stack_developer">Full Stack Developer</option>
                  <option value="front_end_developer">Front End Developer</option>
                  <option value="back_end_developer">Back End Developer</option>
                  <option value="quality_assurance_analyst">Quality Assurance Analyst</option>
                  <option value="product_manager">Product Manager</option>
                  <option value="business_analyst">Business Analyst</option>
                  <option value="it_project_manager">IT Project Manager</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="study-level" className="block text-sm font-medium leading-6 text-gray-900">
                Nivel de estudio
              </label>
              <div className="mt-2">
                <select
                  id="study-level"
                  name="study-level"
                  autoComplete="study-level"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                >
                  <option value="" selected disabled>Seleccione su nivel de studio</option>
                  <option value="primaria">Primaria</option>
                  <option value="secundaria">Secundaria</option>
                  <option value="bachillerato">Bachillerato</option>
                  <option value="tecnico">Técnico</option>
                  <option value="licenciatura">Licenciatura</option>
                  <option value="maestria">Maestría</option>
                  <option value="doctorado">Doctorado</option>
                  <option value="postdoctorado">Postdoctorado</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="time-availability" className="block text-sm font-medium leading-6 text-gray-900">
                Tiempo disponible
              </label>
              <div className="mt-2">
                <select
                  id="time-availability"
                  name="time-availability"
                  autoComplete="time-availability"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 px-2"
                >
                  <option value="" selected disabled>Seleccione su tiempo disponible</option>
                  <option value="jornada_completa">Jornada Completa: Generalmente 8 horas al día, 40 horas semanales.</option>
                  <option value="jornada_parcial">Jornada Parcial: Menos de 40 horas a la semana, con horarios flexibles.</option>
                  <option value="jornada_intensiva">Jornada Intensiva: Trabajo concentrado en menos días, con horas más largas por día.</option>
                  <option value="jornada_continua">Jornada Continua: Sin interrupciones durante el día, ejemplo: 9:00 a 17:00.</option>
                  <option value="jornada_partida">Jornada Partida: Dividida en dos períodos durante el día, ejemplo: 9:00 a 13:00 y 16:00 a 20:00.</option>
                  <option value="jornada_nocturna">Jornada Nocturna: Trabajo en horas de la noche, generalmente de 22:00 a 6:00.</option>
                  <option value="jornada_rotativa">Jornada Rotativa: Cambios de turno de forma periódica, ejemplo: mañana, tarde y noche.</option>
                  <option value="jornada_flexible">Jornada Flexible: Permite ajustar las horas de entrada y salida.</option>
                  <option value="jornada_a_turnos">Jornada a Turnos: Trabajo en diferentes turnos, que pueden variar.</option>
                  <option value="jornada_medio_tiempo">Jornada de Medio Tiempo: Generalmente alrededor de 20 horas a la semana.</option>
                  <option value="jornada_fin_semana">Jornada de Fin de Semana: Trabajo exclusivamente durante los fines de semana.</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <img src={icon_user} aria-hidden="true" className="h-12 w-12 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <img src={icon_picture} aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form_aspirante;