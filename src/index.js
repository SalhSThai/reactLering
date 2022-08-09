import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*Component Note
Always Capital Letter
parameter = props => TypeOf(props) = Object 
return => JSX 
declar: 2 type of Component 1. function 2.class(import React.Component)
call => <ComponentName...  key="value"... ></ComponentName...>

can be child and parent;
defuallt parameter value = true(Boolean)

Unidirectional Data Flow การส่งข้อมูลทางเดียว จาก Patrent to Child 
props.name = xxxxx ห้ามมมมมมมมมมมมมทำาาาาาาาาาาาาาาาาาาา เด็ดดดดดดดขาดดดดดดดดด
props ห้าม modify 
props  read only
React จะต้องเป็น Pure function
Pure function คือ input ที่เข้าไปจะต้องออกมาค่าเดิมเท่านั้น ไม่มีการ Modify Input 

*/

const Welcome = function (props) {
let jsx = <h1 >Welcome {props.name} {props.age} years old</h1>
return jsx;
}

class WelcomeClass extends Component{// Class Component  import Component name
  render(){
    let jsx = <div><h1>Welcome class</h1></div>
    return jsx;
  }
}
class Position extends React.Component{ // Class Component 
  render(){
let jsx = <div>Position Component</div>

    return jsx;
  }
}
function MainContainer(){
  let jsx = <div>
    <Welcome name="Bob" age="55"></Welcome>
    <Position></Position>
     </div>
  return jsx;
}


const element = <div>
  <Position></Position>
  <WelcomeClass></WelcomeClass>
  <MainContainer></MainContainer>
  {/* {Welcome({name: 'John'})}
  {Welcome({name: 'Mike'})}
  {Welcome({name: 'Peter'})}
  {Welcome({name: 'Sarah'})}
  {Welcome({name: 'Sam'})} */} 
  <Welcome name="John"/>  {/* ส่ง Parameter เข้าไป */}
  <Welcome name="Mike" age='30'/>  {/* ส่งเข้าไปเป็น Object  */}
  <Welcome/>
  <Welcome/>
  <Welcome/>
  </div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
