import "./form.css"
import React from 'react'
import { useState } from "react";

const Form = () => {
  const [formdata, setformdata] = useState({
    username: '',
    password: '',
  });

const handlechange = (event) => {
        const {name,value}=event.target;
        setformdata({...formdata,[name]:value})
};
const handleclick = async (event)=>{
  event.preventDefault();
  console.log(formdata);
  try{
    const response = await fetch('https://dummyjson.com/auth/login',{
      method:'Post',
      headers:{'Content-Type':'application/json',},
      body:JSON.stringify(formdata),
    });
    if(response.ok){
      const{token}=await response.json();
      localStorage.setItem('token',token);
    }
    else{
      const error=await response.text();
      console.log(error);;
    }
  }
  catch(error){
  }
}

  return (
    <div className="mainContainer">
      <div className="inputFields"> 
         <h1>
          Form
         </h1>
         <div className="Username">
         <input 
         placeholder="Type your Username"
         type="text"
         name="username"
         value={formdata.username}
         className="uInput"
          onChange={handlechange}
         />
         </div>
         <div className="Passwordname">
         <input placeholder="Type your Password"
          type="password"
          name="password"
          className="pinput"
          value={formdata.password}
          onChange={handlechange}
         />
         <div>
         <button
        // disabled={loading}
         onClick={handleclick} 
         className="submitbtn">
              Submit
         </button>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Form
