
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
/*
function App() {
//effect Hook
//useEffect(didUpdateFn,dependencyArray)
//didUpdateFn จะภถูกเรัยกใช้ หลังจาก component re - render ในกรณีไม่ใส่ dependencyArray
console.log('App run');
// App run first จะRender JSX
// หละง render เสร็จ didUpdateFn จะรัน
const [state,setState] = useState([]);
const useEffectFn = function (){console.log('Effect Run');
axios.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{ 
  console.log(res.data);
  setState(res.data)})

};
useEffect(useEffectFn,[])

  return (
    <ul className="App">
    {state.map(item=><li key={item.id}>{item.name}</li>)}
    </ul>
  );
}*/
/*
function Input(props) {
  const [input, setInput] = useState(props.data);

  useEffect(()=>{
    setInput(props.data);
  },[props.data]);

  return <input type="text" value={input} onChange={e => setInput(e.target.value)} />
}
function App() {
  const [EditeData, setEditData] = useState('');
  
  return (
  <>
    <ul>
      <li>7-11<button onClick={()=>setEditData('7-11')}> EDIT</button></li>
      <li>Big C<button onClick={()=>setEditData('Big C')}> EDIT</button></li>
      <li>Tesco Lotus<button onClick={()=>setEditData('Tesco Lotus')}> EDIT</button></li>
    </ul>
    {EditeData&& <Input data={EditeData}/>}
  </>)
}
*/
function App() {
const [toggle,setToggle] = useState(false);

function re (){
  return console.log("return effect")
}
useEffect(()=>{
console.log("effect body");
  return re ;
},[toggle])


// useEffect(()=> {
//   const id = setTimeout(()=>{/*request fetch api */},3000)
//   return () => clearTimeout(id);
// },[input])

return<div>
<button onClick={()=>setToggle(!toggle)}>Toggle Counter</button>
{/* {toggle && <Counter />} */}

</div>

}
// function Counter(){
//   // useEffect จะ return ค่าเหมือถูก Remove ออกจาก DOM 
//   // กับ เกิดการเปลี่ยน แปลงอีกครั้ง ที่ dependencyArray  จะ Return ก่อน แล้วค่อยเกิด Effect รอบ 2
//   useEffect(()=>{
//     const intervalId = setInterval(()=> console.log("count trigger"),1000)
//     return ()=> {
//       console.log("close interval")
//       clearInterval(intervalId);
//     }
//   },[]);
//   return <div>Counter</div>
// }

export default App;
