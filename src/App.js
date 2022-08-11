import logo from './logo.svg';
import './App.css';
const students = ["q","w","e","r","t","y","u","i","o","p"]
const data = [
{id:1,name:"Coke",price:20,stock:100,description:''},
{id:2,name:"Pepsi",price:25,stock:200,description:''},
{id:3,name:"Est.",price:15,stock:150,description:''}

]
function App() {
  return (
    <div className="bg">
   
<div style={{item:'center' ,display:'flex',flexDirection:'column',justifyContent:"center",alignItems:'center' ,gap:'24px'} }>
{/* {students.map((item,index) => 
<button key={index} style={{width:'50px',height:'50px'}}>{item}</button>)} */}
{data.map((item,index)=>{ 
  return <div><h1 key={index}>{item.name}</h1><h2>{item.price}</h2></div>
})}

</div>

    </div>
  );
}
export default App;