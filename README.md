# DH_PracticasProfesionales
Espacio creado para el desarrollo del trabajo integrador del curso de Practicas Profesionales de Digital House - Playground

Para instalar el proyecto, basado en los requisitos y objetivos que hemos proporcionado. Este archivo lo estructuramos para proporcionar toda la información necesaria sobre el proyecto, incluyendo la introducción, objetivos, requisitos, y cómo configurar y ejecutar tanto el frontend como el backend.

---

# Trabajo Integrador - Sprint

## Introducción

¡Prepárate para entregar un proyecto de alto valor y dar un impulso a tu perfil profesional! Al agregarle experiencia práctica, estarás un paso más cerca de alcanzar tus sueños laborales. El objetivo de este desafío de codificación es brindarte la oportunidad de mostrar tu conocimiento en un proyecto de la vida real.

Este desafío te pide desarrollar un **frontend** que consumirá datos de una **API** que también deberás desarrollar. El frontend debe mostrar la información obtenida respetando las pautas proporcionadas. Además, la API debe desarrollarse siguiendo requisitos específicos.

## Contexto

Somos una empresa multinacional de Recruiting de Recursos Humanos, dedicada a insertar a los aspirantes en puestos de trabajo altamente demandados en la industria. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo de aspirantes. 

**Consideraciones:**
- No sabemos si el framework que utilicemos ahora será el definitivo, pero queremos reutilizar el máximo de código posible.
- La aplicación debe ser fácil de usar y agradable a la vista.
- El 80% de nuestros usuarios utilizan navegadores de escritorio, pero la aplicación también debe ser visualizable en dispositivos móviles y tablets.

## Objetivo

El proyecto se divide en tres partes:

1. **Base de Datos**: Desarrollar una base de datos "RecruitingRH" utilizando MySQL.
2. **API-REST**: Construir una API utilizando Node.js y Express para mostrar los aspirantes registrados en la base de datos.
3. **Frontend**: Diseñar y desarrollar un frontend usando React y Bootstrap (o Tailwind).

## Requisitos

### Frontend

1. Desarrollar en **React JS**.
2. Usar **ECMAScript 6** para el desarrollo de componentes.
3. Crear **Componentes Funcionales** y usar **React Hooks** (`useEffect`, `useState`).
4. Realizar el consumo de servicios API REST mediante **Fetch** o **Axios** con programación asíncrona y **async/await**.
5. La navegación debe realizarse mediante **React Router DOM**.
6. El proyecto debe ser una **SPA** (Single Page Application).
7. Crear el proyecto con la plantilla **Vite**.
8. Manejar dependencias con **NPM**.
9. Utilizar **Bootstrap** o **Tailwind** para la maquetación.
10. Determinar la cantidad necesaria de componentes.

**Entregable:** Dashboard completamente funcional.

### Backend - Base de Datos

1. Crear la base de datos **"recruitingRH"** utilizando **MySQL**.
2. Crear una tabla **"aspirantes"** con los siguientes campos:
   - DNI
   - Nombre
   - Apellido
   - Email
   - Teléfono
   - Perfil URL de Linkedin
   - Fecha de nacimiento
   - Sexo
   - Imagen
   - Profesión

**Entregable:** Diagrama Entidad-Relación y respaldo de la estructura de la base de datos (`.sql`).

### Backend - API - REST

1. Crear una API para entregar dos endpoints:
   - **Lista completa de aspirantes**.
   - **Listado de profesiones**.

**Entregable:** URLs funcionales devolviendo datos en formato JSON.

## Instalación y Configuración

### Configuración del Backend

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Configurar la base de datos**:
   - Asegúrate de que MySQL esté en funcionamiento.
   - Importa el archivo `.sql` para crear la base de datos y la tabla.

3. **Ejecutar el servidor**:
   ```bash
   npm run start
   ```

### Configuración del Frontend

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar el proyecto**:
   ```bash
   npm run dev
   ```
3. # Reaccionar + Vite

Esta plantilla proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

Actualmente, hay dos complementos oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs .io/) para actualización rápida
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para actualización rápida
  
## Contribución

Para contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios.
4. Haz commit de tus cambios (`git commit -am 'Añade nueva funcionalidad'`).
5. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
6. Crea un Pull Request.

## Autores

•	https://github.com/NatanielCZN
•	https://github.com/andresS16
•	https://github.com/carlamv221
•	https://github.com/CayoWalterJulian
•	https://github.com/marisolpatri77
•	https://github.com/JoaquinZerpa
•	https://github.com/Georgi2024

## Licencia

Este proyecto está bajo la Licencia ISC. Para más detalles, consulta el archivo LICENSE.

---

Este `README.md` proporciona una visión general clara del proyecto, instrucciones de configuración y cómo contribuir. Asegúrate de actualizar la información de contacto y licencias según corresponda. 
