import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
  <>
    <h1>Page not found</h1>
    <NavLink to={"/"}>
        <button> Go Back to home page </button>
    </NavLink>  
 </>
 
 );
}

export default Error;
