import { width } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import img from "./image1.jpg"
import './Aboutus.css'


const Aboutus = () => {
  return <>
  
      <p>About us</p>
      <img className='fit' src={img}/>
  </>
  
};

export default Aboutus;
