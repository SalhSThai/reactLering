import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const nickname = `John`;
let message;
if (nickname === `John`) {
  message = <p>He is a boy</p>
} else {
  message = <p>Shw is a girl</p>

}
function greeting(name) {
  return <p>Hello {(name)}</p>
}
const classesH1 = 'main-headder padding-top-3px';
const obj = {key:2,
name:35}
const arr = Array.from(obj);
console.log(arr);



const element = (
  <div id='main' className='main'>
    <h1 className={classesH1}>
      Hello JSX from {nickname} , {20 + 35 + ' year old.'}
    </h1>
    {message}
    {greeting('Michael')}
    <label htmlFor='username'>Username:</label>
    <input type="text" id='username' />
    <input type="text" />
    {/* String ,Number ,Array of JSX มีแค่ 3 type ที่สามารถ Render ได้ */}
    <h1>{"Render String"}</h1>
    <h1>{23456}</h1>
    <h1>{[<p>JSX Array Elements</p>, 'String Array Element Tel:*******', 6665]}</h1>
    {/* Boolen,null,undefined are ignored */}
    <h1>{true} true {false} move</h1>
    <h1>{null}</h1>
    <h1>{undefined}</h1>
    {/* reder Object = ERROR */}
    {/* <h1>{{ firestName: 'John', age: 30 }}</h1> */}
    <h1>{arr}</h1>
  </div>

)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element





)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
