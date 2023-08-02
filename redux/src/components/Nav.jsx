import React from 'react'
import './Nav.scss'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <>
      
      <div className='nav'>

        <div className="logo">
            Redux
        </div>
        <div className="navLinks">

        <Link className='link' to='/'> home</Link>
        <Link className='link' to='/cart'> Cart</Link>
        </div>

      </div>

    
    </>
  )
}

export default Nav