import logo from './logo.svg';
import './App.css';
import classes from './App.module.css'
// CSS styleing
//1.inline
//2.External Style sheet
//3. Module Css
//4. Module in JS

// 1.INLINE CSS
const style = {
width: "400px",
height: "300px",
border: "1px solid red",

}

function App() {  
  // 1.INLINE CSS
  return (<div style={style}> 
     <h3 style={{color:"green",fontSize: "50px"}}>Inline Style</h3>
     <div className='w-200 h-100 border-green-2'> external css</div>
     <div className={classes.test}> module css</div>
     {/* <div className='{classes.test} {classes.test2} '>multiple module css</div> */}


  </div>
  );
}

export default App;
