import logo from './logo.svg';
import './App.css';

const btn = {
  width:"100px",
  height:"100px",
  borderRadius:"100%",
  margin:"20px"
}
const AddBtn = function(){
const jsx =<div>

  
</div>

return jsx;
}

function App() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
      <button style={btn}>-</button> <h1>0</h1> <button style={btn}>+</button> <button className='resetBtn'>Reset</button>
      <div>
        <AddBtn/>


      </div>
    </div>
  );
}

export default App;
