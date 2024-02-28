import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="bg-green-200 flex justify-center background-image">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vindo!!</h2>
              <p className='text-xl'>Edite aqui o estoque da farmácia</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver estoque</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
                    
            </div>
          </div>
        </div>
    );
}

export default Home;
