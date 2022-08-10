import logo from './logo.svg';
import './App.css';

function App() {
//   const handleClick  = () => { alert('Clickkkkkkkkkked');  }
//   return  <button onClick={handleClick}>Click</button>   ;

// const change = function() {console.log("change Ja")}
// return (<input type="text" onChange={change}></input>);

  // return (<form action='https//:www.google.com' onSubmit={(event) => {
  //   event.preventDefault();
  //   console.log(event);}}>
  //   <input type="tel" onChange={function(event) {console.log(event.target.value)}}></input>
  //   <button type='submit'>Submit</button>
  //   <button type='reset'>Cancel</button>
  
  // </form>)

  const handleClick = (name) => {console.log(name)};
  const handleClickAnotherBtn = function (name) {

    return ()=> console.log(name);
  };
  return (<div style={{display:"flex",justifyContent:"center"}}>
<button onClick={() => handleClick(1)}>Click one </button>
<button onClick={() => handleClick(2)}>Click two </button>
<button onClick={handleClickAnotherBtn(3)}>Click tree </button>
  </div>);
}

export default App;
