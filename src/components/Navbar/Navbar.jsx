import React from 'react'
import{NavLink} from 'react-router-dom'
import css from './Navbar.module.scss'

function Navbar() {
  return (
    <div className={css.wrapper}>
      <div className={css.log}>golow</div>
      <div className={css.menu}>
        <NavLink className={css.links}>Home</NavLink>
        <NavLink className={css.links}>Shop</NavLink>
        <NavLink className={css.links}>Signup</NavLink>
        <NavLink className={css.links}></NavLink>
        wassup
      </div>
      
    </div>
  )
}

export default Navbar