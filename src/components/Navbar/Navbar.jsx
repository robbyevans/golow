import React from 'react'
import{NavLink} from 'react-router-dom'
import css from './Navbar.module.scss'
import { FaBeer } from 'react-icons/fa';

function Navbar({user}) {
  return (
    <div className={css.wrapper}>
      <div className={css.logo}>
        <img src='./target02.png'/>
      </div>
      <div className={css.menu}>
        <NavLink className={css.links} to='/'>Home</NavLink>
        <NavLink className={css.links} to='/shop'>Shop</NavLink>
        {
          user?(
            <NavLink className={css.links} to='/account'>Account</NavLink>
          ):(
            <NavLink className={css.links} to='/account'>SignUp</NavLink> 
          )
        }
      </div>
      
    </div>
  )
}

export default Navbar