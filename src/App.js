

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayok = ['Shawon Ahmed', 'Shafin Ahmed', 'Shahrukh Ahmed', 'Shahin Ahmed'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Document name={nayok[0]}select="Hero"></Document>
        <Document name={nayok[1]} select="Freelancer"></Document>
        <Document name={nayok[2]} select="Singer"></Document>
        <Document name={nayok[3]} select="Dancer"></Document>
     
      </header>
    </div>
  );
}

function Document(props){
return (
  <div style={{border:"1px solid red", margin:"10px", background:"skyblue", borderRadius:"20px"}}>
    <h1 style={{color:"tomato", background:"yellow"}}>I am {props.name}</h1>
    <h2>{props.select} of the year</h2>
  </div>
  
 )
}
export default App;
