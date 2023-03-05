import React from 'react'
import Hero from '../Hero/Hero'
import Products from '../Products/Products'
import css from './Home.module.scss'

function Home() {
  return (
    <div className={css.wrapper} >
      {/* <Hero/> */}
      <Products/>

    </div>
  )
}

export default Home