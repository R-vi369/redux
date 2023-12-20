import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <>
      
      <div className='flex justify-around h-[4rem] items-center bg-black text-white'>

        <div className="cursor-pointer">
          <Link to='/'>
            Redux
          </Link>
        </div>
        <div className="flex gap-4">

        <Link className='text-white  text-xl ' to='/'> home</Link>
        <Link className='text-xl text-white' to='/cart'> Cart</Link>
        </div>

      </div>

    
    </>
  )
}

export default Nav