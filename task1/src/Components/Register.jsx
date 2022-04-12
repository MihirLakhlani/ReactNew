import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Components/Register.css";
import { NavLink } from "react-router-dom";
import Sign_in from "./Sign_in";
import Sign_up from "./Sign_up"

const Register = () => {
  const [y, sety] = useState("formBx");
  const [abcd, setAbcd] = useState(0);
  const [isActive, setActive] = useState(0);
  const handleClick = () => {
    setAbcd(1);
    sety('formBx-active')
    setActive(0);

  };
  const handleCliclk2=()=>{
     setAbcd(0);
    sety('formBx')
    setActive(1);
  }
  return (
    <div className={abcd===0?"body2":null}>
        <div className="container">
          <div className="blueBg">
            <div className="box signin">
              <h2>Already have an account?</h2>
             
                <button className="sigininBtn" onClick={handleCliclk2}>
                  Sign in
                </button>
            </div>
            <div className="box signup">
              <h2>Don't have an account?</h2>
              <button className="siginupBtn" onClick={handleClick}>
                Sign Up
              </button>
            </div>
          </div>
          <div className={abcd === 1 ? "formBx-active" : "formBx"}>


            {y==="formBx"?<Sign_in/>:<Sign_up/>}
        
          </div>
        </div>
    </div>
  );
};

export default Register;
