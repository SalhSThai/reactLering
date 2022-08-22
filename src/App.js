import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import {vPost} from './obj.module'

// ให้สร้างตัวแปร Array เก็บข้อมูล Post ที่เป็น Object มี key คือ id, message, วันที่ Post, ชื่อคนโพสต์
// นำ ArrayPost มา Render ใน list แล้วแสดงบนหน้า UI

function App() {
  const [friendsArr, setFriendsArr] = useState([]);

  const vFriendsArr = ['a', 'b', 'c', 'd', 'e', 'f'];
  
  const putList1 = arr =>arr.map(item =><li>{item}</li>);
  const putList2 = (arr) => {
    return arr.map(item => { return <div>
      <li>{item.id}</li><br/>
      <li>{item.message}</li><br/>
      <li>{item.datePost}</li><br/>
      <li>{item.userName}</li></div>
    })
  };

  console.log(putList2(vPost));

  return (
    <div className="App" style={{display:'flex', flexDirection:'column',justifyContent:'center',width:'100vw'}}>
      <ul>{putList1(vFriendsArr)} </ul>
      <ul>{putList2(vPost)}   </ul>
      <div style={{border:"1px solid black", width:'80vw',height:'100px'}}><h1></h1>
      <p></p><p></p>
      </div>
    </div>
  );
}

export default App;
