import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
const [isLogged,setIsLogged] = useState(false)
//if isLogged is true : render welcome back , else : go to login page
//1. store jsx in a variable
// const message = isLogged? <h1>welcome back </h1>:<h1>Go to Login page</h1>
//   return (
//     <div >{message}</div>
//   );

  //2. && Operator (null && <h1>Test</h1>)
// return <div>
//   {isLogged && <h1>Welcome back</h1>}
//   {!isLogged && <h1>Go to login Page</h1>}
// </div>

// 3.Ternary operator
return (<div>{isLogged?<h1>Welcome back</h1>:<h1>Go to Login Page</h1>}</div>)


}

export default App;
