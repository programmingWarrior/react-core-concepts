

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayok = ['Shawon Ahmed', 'Shafin Ahmed', 'Shahrukh Ahmed', 'Shahin Ahmed','Bappi Ahmed','shuvo Ahmed','Biplob'];


const productList =[
  {name:'Photography', price: 90.99},
  {name:'All App', price: 269.99},
  {name:'Acrobat Pro', price: 69.99},
  {name:'PhotoShop', price: 89.99},
  {name:'Premiere Pro', price: 67.66}
]

const products = [
  { name:'shawon', class: 10},
  {name: 'santo', class: 9},
  {name: 'Riajul', class:12},
  {name:'samrat', class: 6}
];

const nayokName = nayok.map(nayok => nayok);
console.log(nayokName);

const productName = products.map(products=> products.name);
console.log(productName);




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          {
            nayok.map(nayok => <li>{nayok}</li>)
          };
          <li>{nayok[0]}</li>
          <li>{nayok[1]}</li>
          <li>{nayok[2]}</li>
          <li>{nayok[3]}</li>
        </ul>
          {
            productList.map(product => <Product product={product}></Product>)
          }
        

       
     
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
      <h3>{props.product.name}</h3>
      <h1>US${props.product.price}/mo</h1>
      <button style={{color:'white', background:'#0D66D0',borderRadius:'40px',padding:'20px',fontWeight:'bold',}}>Buy now</button>
    </div>
  )
}


export default App;
