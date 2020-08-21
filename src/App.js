

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayok = ['Shawon Ahmed', 'Shafin Ahmed', 'Shahrukh Ahmed', 'Shahin Ahmed'];
const productList = ['Photography', 'All Apps', 'Acrobat Pro', 'Photoshop', 'Premiere Pro'];

const productPrice = [9.99, 2.99, 14.99, 20.99, 9.99];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Product name={productList[0]} price={productPrice[0]}></Product>
        <Product name={productList[1]} price={productPrice[1]}></Product>
        <Product name={productList[2]} price={productPrice[2]}></Product>
        <Product name={productList[3]} price={productPrice[3]}></Product>
        <Product name={productList[4]} price={productPrice[4]}></Product>

        <Document name={nayok[0]}select="Hero"></Document>
        <Document name={nayok[1]} select="Freelancer"></Document>
        <Document name={nayok[2]} select="Singer"></Document>
        <Document name={nayok[3]} select="Dancer"></Document>
     
      </header>
    </div>
  );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height:'250px',
    width: '250px',
    float:'left',
    padding:'15px',
    margin:'5px',
    textAlign:'left',
    justifyContent:'left',
    fontWeight:'10',
    fontFamily:'Arial',
    color:'black'

  }
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h1>US${props.price}/mo</h1>
      <button style={{color:'white', background:'#0D66D0',borderRadius:'40px',padding:'20px',fontWeight:'bold',}}>Buy now</button>
    </div>
  )
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
