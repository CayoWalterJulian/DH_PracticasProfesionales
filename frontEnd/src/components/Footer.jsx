import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-400 border-opacity-25 text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 JRH. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a href="" className="text-black hover:underline mx-2">
            Términos y Condiciones
          </a>
          <span>|</span>
          <a href="" className="text-black hover:underline mx-2">
            Políticas de Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer