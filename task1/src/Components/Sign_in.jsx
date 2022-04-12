import React from 'react';
import "../Components/Register.css";
import { useState } from 'react';
const Sign_in = () => {
  const [user, setUser] = useState({
    email:"",
    password : ""
  });
  return (
   <div className="form signinForm">
  <form>         
  <h3>Sign in</h3>
  <input type="email"  placeholder="email id"/>
  <input type="password"  placeholder="password"/>
  <input type="submit"/>
  </form>
</div>
)
};
export default Sign_in;
