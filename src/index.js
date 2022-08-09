import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const fullName = 'SarahSab';
const birthYear =  1990;
const currentYear = 2022;
const weight = 72;
const height = 170;
const str ="String";
const num = 9999;
const boo = true;
const nu = null;
const un = undefined;
const ob = {key : 123,
key2 : 456,
key3 : 789}

const bmiCalculator = function(weight,height){
  let heightM = height/100;
  let bmi = Math.floor(weight/Math.pow(heightM,2));
  return `your height: ${height} weight: ${weight} BMI: ${bmi} `;
};
 function lab4() {
  return (
    <h1>Welcome to Thailand</h1>
    // <h2>Land of smile</h2>
  );
}
function lab5() {
  return (
    <div>
      <span>My name is John.</span>
      <br/>
      <span>I'm 27 years old.</span>
    </div>
  );
}



const element = <div>
  {/* LAB 01 */}
<h1>{fullName}</h1>
<p>{currentYear - birthYear}</p>
{/* LAB 02 */}
<h1>{bmiCalculator(weight,height)}</h1>
{/* LAB 03 */}
<label htmlFor='username'>Username</label>
<input className='username' id='username' name='username' ></input>
{/* LAB 04 */} 
{/* ANSWER = ใช้งานไม่ได้ 1. ชื่อFunction ซ้ำ กับ App ที่ Importมา */}
{/*                   2. root Element มี ถึง 2 root */}
<h1>{lab5()}</h1>
{/* LAB 05 */} 
{/* ANSWER = ใช้งานไม่ได้ 1. div เป็น root Element ใหญ่  */}
{/* LAB 05 */} 
{/* ให้สร้างตัวแปร 6 ตัวเก็บค่าอะไรก็ได้ แต่จะต้องมี data type เป็น String Number Boolean null undefined และ object
ให้ render ตัวแปรทั้ง 6 ออกมาในหน้า web */}
<h1>String : {str} Number: {num} Boolean: {boo} Null: {nu} undefined: {un}   </h1>
{/* <h1>Object:{obj}</h1> */}
</div>;
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
