import React,{useState,useEffect} from 'react'
import css from './Search.module.scss'

function Search() {

  const [product, setProduct] = useState([])





  function handleSubmit(e){
    e.preventDefault();

  }
  return (
    <div className={css.wrapper}>

        <form onSubmit={handleSubmit} className={css.formControl} >
          <input
          type='text'
          placeholder='Search for product'
          onChange={(e)=>{
           setProduct=(e.target.value) 
          }}
          ></input>
          <button type='submit'>Search</button>
        </form>

    </div>
  )
}

export default Search