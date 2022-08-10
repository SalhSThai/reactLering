import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



let num = 0;
function App() {
  // Userstate return Array ที่มี Lenght เท่ากับ 2 เสมอ= > [0]
  // element ตัวแรก คือ ค่า state
  // element ตัวที่สองเป็น Function ที่ใช้ในการอัพเดท state 
  const state = useState(0);//[currentState,function]
  //convetion
  const [count, setCount] = useState(0);

  const handleClickAdd = () => {
    setCount(count + 1);
    setCount(function (currentCount) {
      return currentCount + 1;
    });
    setCount(function (currentCount2) {
      return currentCount2 + 1;
    });
    setCount(function (currentCount3) {
      return currentCount3 + 1;
    });
    setCount(function (currentCount4) {
      return currentCount4 + 1;
    });



    num++;
  }
  const handleClickSub = () => {
    setCount(count > 0 ? count - 1 : 0)
  }
  function Test() {
    console.log("test")
    return <h1>Test</h1>
  }
  return (
    <div style={{ justifyContent: 'center', display: "flex", gap: "24px" }}>
      <Test></Test>
      <button onClick={handleClickAdd}>+</button>
      <h1>{count}</h1><h1>{num}</h1>
      <button onClick={handleClickSub}>-</button>
      {/*  */}
    </div>
  );
}

export default App;
