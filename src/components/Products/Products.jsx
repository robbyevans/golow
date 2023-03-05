import React,{useState,useEffect} from 'react'


import Banner from '../Banner/Banner'
import Search from '../Search/Search'

function Products() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3bf4387476mshe94e77fe1fdcbcep11c926jsna1b2dbf40aac',
      'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
    }
  };

  useEffect(()=>{

    fetch('https://jumia-service.p.rapidapi.com/api/products/apple-macbook-pro-16-inch-a2141-core-i9-2.3ghz-ram-16go-1tb-space-gray-41875712.html', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[])
  

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '3bf4387476mshe94e77fe1fdcbcep11c926jsna1b2dbf40aac',
  //     'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
  //   }
  // };

  // useEffect(()=>{
  //   fetch('https://jumia-service.p.rapidapi.com/api/products/samsung-galaxy-a12-blanc-4gb-ram-128gb-6.5-hd-5000mah-blanc-45397926/reviews', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));

  // },[])
  
  

  return (
    <div>
      <Search/>
      <Banner/>
    </div>
  )
}

export default Products