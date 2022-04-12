import React from "react";
import "../Components/Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {} from "react-router-dom"

const Sign_up = () => {
  
  const [enteredname , setEnteredname] = useState(
    {
      name:"",
      email:"",
      password:"",
      number: ""
    }
  ) 
  
let name , value
  const url = "http://localhost:4000/posts"
  const pagehandler = (event) => {
    name = event.target.name
    value = event.target.value
    setEnteredname({...enteredname,[name]:value })
  }
  const history = useNavigate()
   const pagereloadavoid = (event) => {
    event.preventDefault()
    history('/',{state:enteredname})
    console.log(enteredname)
    axios.post(url,{
      name:enteredname.name,
      email:enteredname.email,
      password:enteredname.password,
      number:parseInt(enteredname.number)
    })
    .then((res)=>{
        console.log(res)
    })
  }
  return (
    <div className="form signupForm">
      <form >
        <h3>Sign Up</h3>
        <input type="text" placeholder="name"  name="name" value={enteredname.name} onChange={pagehandler} required/>
        <input type="email" placeholder="email" name="email" value={enteredname.email} onChange={pagehandler} required/>
        <input type="password" placeholder="password" name="password" value={enteredname.password} onChange={pagehandler} required/>
        <input type="number" placeholder="number"  name="number" value={enteredname.number}  onChange={pagehandler} required/>
        <input type="submit" />        
      </form>
    </div>
  );
};
export default Sign_up;


