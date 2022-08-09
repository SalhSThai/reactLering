import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// LAB 1
const Profile = function (props) {
  let jsx = <div>
    <h1>John Doe</h1>
    <h2>age 27</h2>
  </div>
  return jsx;
}
// LAB 2
function Car(props) {
  console.log(props.brand); // *
  console.log(props.price); // **
  console.log(props.color); // ***
  return <div>Car</div>;
}
function Lab2(props) {
  const jsx = <div>
    <Car brand="Honda" price="1000000"></Car>
    
    <h4>props.brand = Honda</h4>
    <h4>props.price = 1000000</h4>
    <h4>prop.scoloe = undefined</h4>

  </div>
  return jsx;
}
//  props.brand Honda
//  props.price = 1000000
//  prop.scoloe = undefined

// LAB 3
const obj = {
  name: "John",
  price: 10,
  describe: "doe"
}
const ProductItem = function (props) {
  let jsx = <div>
    <h1>product name : {props.name}</h1>
    <h2>product price : {props.price}</h2>
    <p>Description : {props.description}</p>
  </div>
  return jsx;
}
//LAB 4
const ProductItem4 = function (props) {
  let jsx = <div>
    <h1>product name : {props.item.name}</h1>
    <h2>product price : {props.item.price}</h2>
    <p>Description : {props.item.description}</p>
  </div>
  return jsx;
}

const JSX = <div>
  <h1>LAB 1</h1>
  <Profile></Profile>

  <h1>Lab 2</h1>
  <Lab2></Lab2>


  <h1>LAB 3</h1>
  <ProductItem name="John" price="100" description="Doe"></ProductItem>

  {/* LAB 4 */}
  <h1>LAB 4</h1>
  <ProductItem4 item={obj}/>
</div>







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(JSX);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
