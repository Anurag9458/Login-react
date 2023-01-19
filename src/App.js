// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';

const App=() =>{
  const [name,setName]=useState("");
  const [fullName,setFullName]=useState();

  const inputEvent=(obj)=>{
   // alert(obj.target.value);
    setName(obj.target.value);
  }
  const login=()=>{
    // alert(name);
    setFullName(name);
  }
  return (
    <>
    <div>
      <p>Enter your name:  
      <input type="text"  placeholder="Enter your name" onChange={inputEvent}  /> 
      <button onClick={login}>Login</button></p>
      <h2>Hi! {fullName}</h2>
      <h2>Welcome to LPU</h2>
      <p>Assignment submitted by Anurag Gupta (12010476) </p>
    </div>
    </>
  );
}

export default App;
