import React from 'react'
import{NavLink} from 'react-router-dom'
import css from './Navbar.module.scss'

function Navbar({user}) {
  return (
    <div className={css.wrapper}>
      <div className={css.logo}>golow</div>
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