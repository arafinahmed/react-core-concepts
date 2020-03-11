import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ["Anwar", "Jafor", "Salman Shah", "Rubel"];
  const products = [
    {name: 'Photoshop', price :'$90.99'},
    {name: 'Illustrator', price :'$60.99'},
    {name: 'Pdf Reader', price :'$9.99'}
  ];
  
  return (
    <div className="App">
        <header className="App-header">
        <Counter></Counter>
        <Users></Users>
          <ul>
            {
              heros.map(n => <li> {n} </li>)
            }
            {
              products.map(pro => <li>{pro.name}</li>)
            }
            
          </ul> 
          {products.map(pro => <Product product={pro}></Product>)}

      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}
function Person(props){
  const personStyle = {
    border: '2px solid green',
    margin: '10px',
    borderRadius: '15px',
    padding: '20px'
  }
    console.log(props);
      return (      
        <div style={personStyle}>
          <h1>{props.name}</h1>
          <h2>Cricketer</h2>
        </div>
      
      );
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    weight: '200px',
    float: 'left'
  };
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
      <h3>Name: {name}</h3>
      <h4>Price: {price}</h4>
      <button>Buy Now</button>

    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove= {() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  );
}

export default App;
