import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <div className='w-full bg-green-300  text-black flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase ml-10'>FarmaGen</div>

          <div className='flex gap-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/cadastrocategorias' className='hover:underline'>Cadastrar Categoria</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;