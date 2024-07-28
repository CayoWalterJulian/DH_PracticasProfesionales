import React from 'react'

function SearchTalent() {
  return (
    <div>

      <div className='text-center p-3 mt-10 md:mt-14 lg:mt-20'>
        <h2 className='font-poppins text-gray-700 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>Algunas de las profesiones que podrás encontrar</h2>
      </div>

      <div className='flex justify-center'>

        <div className='max-w-7xl m-3 p-3 grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex '>
            <div>
              <img src='../src/assets/img/abogado.jpg' alt="" className='h-[250px] md:h-[500px] lg:h-[430px] rounded-lg' />
            </div>
          </div>

          <div className='flex'>
            <div>
              <img src="../src/assets/img/ingeniero.jpg" alt="" className='h-[250px] md:h-[500px] lg:h-[430px] rounded-lg' />
            </div>
          </div>

          <div className='flex  md: flex-none'>
            <div>
              <img src="../src/assets/img/arquitecto.jpg" alt="" className='h-[250px] md:h-[500px] lg:h-[430px] rounded-lg' />
            </div>
          </div>

          <div className='flex '>
            <div>
              <img src="../src/assets/img/botanico.jpg" alt="" className='h-[250px] md:h-[500px] lg:h-[430px] rounded-lg' />
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default SearchTalent