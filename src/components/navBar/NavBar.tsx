import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-green-300 text-black flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'> Farmácia da Isa </div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Editar Categorias</div>
              <div className='hover:underline'>Editar Produtos</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar