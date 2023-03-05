import React from 'react'
import css from './Banner.module.scss'

function Banner() {
  return (
    <div className={css.wrapper}>
      <img  src='./jumia.png'/>
      <img  src='./kilimall.png'/>
      <img  src='./sky-garden.png'/>
      <img  src='./amazon.png'/>
    </div>
  )
}

export default Banner