import React from 'react'
import Hero from '../Hero/Hero'
import css from './Home.module.scss'

function Home() {
  return (
    <div className={css.wrapper} >
      <Hero/>

    </div>
  )
}

export default Home