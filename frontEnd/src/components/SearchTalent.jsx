import React from 'react'

function SearchTalent() {
  return (
    <div className='bg-purple-100'>

      <div className='text-center p-3'>
        <h2 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Encuentra a los mas indicados según su profesión</h2>
      </div>

      <div className='md:flex justify-center'>
      
      <div className='max-w-7xl m-3 p-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex bg-blue-950'>
            <div>
              <img src='../src/assets/img/abogado.jpg' className='w-[180px] h-[220px] md:w-[200px] md:h-[300px] lg:w-[400px] lg:h-[300px]' alt="" />
            </div>
            <div className='flex flex-1 justify-center items-center lg:rotate-90 lg:writing-mode-vertical-lr'>
              <h2 className='text-white items-center text-lg md:text-xl'>ABOGADOS</h2>
            </div>
          </div>

          <div className='flex bg-purple-950'>
            <div className='flex flex-1 justify-center items-center lg:rotate-90 lg:writing-mode-vertical-lr'>
              <h2 className='text-white items-center text-lg md:text-xl'>INGENIEROS</h2>
            </div>
            <div className='ml-auto'>
              <img src="../src/assets/img/ingeniero.jpg" className='w-[180px] h-[220px] md:w-[200px] md:h-[300px] lg:w-[400px] lg:h-[300px]' alt="" />
            </div>
          </div>

          <div className='flex bg-blue-800 md: flex-none'>
            <div>
              <img src="../src/assets/img/arquitecto.jpg" className='w-[180px] h-[220px] md:w-[200px] md:h-[300px] lg:w-[400px] lg:h-[300px]' alt="" />
            </div>
            <div className='flex flex-1 justify-center items-center lg:rotate-90 lg:writing-mode-vertical-lr'>
              <h2 className='text-white items-center text-lg p-1'>ARQUITECTOS</h2>
            </div>
          </div>

          <div className='flex bg-green-600'>
            <div className='flex flex-1 justify-center items-center lg:rotate-90 lg:writing-mode-vertical-lr'>
              <h2 className='text-white items-center p-1 text-lg '>ECONOMISTAS</h2>
            </div>
            <div className='ml-auto'>
              <img src="../src/assets/img/economista.jpg" className='w-[180px] h-[220px] md:w-[200px] md:h-[300px] lg:w-[400px] lg:h-[300px]' alt="" />
            </div>
          </div>

          <div className='flex bg-gray-500'>
            <div>
              <img src="../src/assets/img/botanico.jpg" className='w-[180px] h-[220px] md:w-[200px] md:h-[300px] lg:w-[400px] lg:h-[300px]' alt="" />
            </div>
            <div className='flex flex-1 justify-center items-center lg:rotate-90 lg:writing-mode-vertical-lr'>
              <h2 className='text-white items-center text-lg md:text-xl '>BOTÁNICOS</h2>
            </div>
          </div>
      </div>
    </div>

    </div>
    
  )
}

export default SearchTalent