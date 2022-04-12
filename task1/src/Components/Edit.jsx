import React from "react";
import "../Components/Register.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";


const Edit = () => {

    const {id} = useParams()
    
  const [enteredname , setEnteredname] = useState(
    {
      name:"",
      email:"",
      password:"",
      number: ""
    }
  ) 
  
let name , value
  const url = ("http://localhost:4000/posts/" +id)
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
    axios.put(url,{
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
    <div className="form signupForm container">
      <form onSubmit={pagereloadavoid}>
        <h3>Edit User</h3> <br />
        <input className="form-control" type="text" placeholder="name"  name="name" value={enteredname.name} onChange={pagehandler} required/> <br />
        <input className="form-control" type="email" placeholder="email" name="email" value={enteredname.email} onChange={pagehandler} required/><br />
        <input className="form-control" type="password" placeholder="password" name="password" value={enteredname.password} onChange={pagehandler} required/><br />
        <input className="form-control" type="number" placeholder="number"  name="number" value={enteredname.number}  onChange={pagehandler} required/><br />
        <button className=" form-control btn btn-outline-info"> Update</button>
        
      </form>
    </div>
  );
};
export default Edit;


