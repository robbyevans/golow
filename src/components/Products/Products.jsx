import React,{useState,useEffect} from 'react'
import axios from 'axios';


import Banner from '../Banner/Banner'
import Search from '../Search/Search'

function Products() {


  const axios = ('axios');
const crypto = require('crypto');
const querystring = require('querystring');

const baseURL = 'https://sellercenter-api.jumia.co.ke/';
const endpoint = 'api/';
const parameters = {
  'UserID': 'robbyevans001@gmail.com',
  'Version': '1.0',
  'Action': 'FeedList',
  'Format': 'JSON',
  'Timestamp': new Date().toISOString(),
};

const api_key = '42c3345ecc21aa295e9601ffe7036acd4d2d9bfb';

const concatenated = querystring.stringify(parameters);
const signature = crypto.createHmac('sha256', api_key).update(concatenated).digest('hex');
parameters['Signature'] = signature;

const config = {
  baseURL,
  url: endpoint,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: querystring.stringify(parameters)
};

axios(config)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });


  const options = {
    method: 'GET',
    headers: {
      'API-Key': '42c3345ecc21aa295e9601ffe7036acd4d2d9bfb',
      'API-Host': 'sellercenter-api.jumia.co.ke'
    }
  };

  useEffect(()=>{

    fetch('https://sellercenter-api.jumia.co.ke/?Action=GetProducts&Filter=all&Format=JSON&Timestamp=2023-03-05T22%3A40%3A04%2B03%3A00&UserID=robbyevans001%40gmail.com&Version=1.0&Signature=c0c866c7ba0fd25c99f7a0adc2b9cfcf796453c441af875d4c865ce42e426e25')
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  },[])
  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3bf4387476mshe94e77fe1fdcbcep11c926jsna1b2dbf40aac',
      'X-RapidAPI-Host': 'jumia-service.p.rapidapi.com'
    }
  };

  useEffect(()=>{
    fetch('https://jumia-service.p.rapidapi.com/api/products/samsung-galaxy-a12-blanc-4gb-ram-128gb-6.5-hd-5000mah-blanc-45397926/reviews', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

  },[])
  
  

  return (
    <div>
      <Search/>
      <Banner/>
    </div>
  )
}

export default Products