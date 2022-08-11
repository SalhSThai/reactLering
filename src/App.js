import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
// React  เราต้องการ submit form ด่วยต้นเองจุง PreventDefault
// Event ที่อยู่ ใน form  จะมี State เป็นของตัวเอง ต้อง นำ state React ไปใส่ Value ของ Input นั้นๆ

function App() {
  const [input,setInput] = useState(''); 
  const [select,setSelect] = useState('NaN')
  console.log(select)
  return (
    <div className="App">
      <div><h1>FORM</h1></div>

<select onChange={e=>setSelect(e.target.value)} value={select}>
  <option value='1'>Bangkok</option>
  <option value='2'>Nonthaburi</option>
  <option value='3' >NaN</option>
</select>
<input type="file"></input>

      <input 
      type="text" 
      value={input}
      onChange={event=>setInput(event.target.value)}
      ></input>

    </div>
  );
}

export default App;
