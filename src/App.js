
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/redux/Page/Home';


function App() {

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<h1>404! this page is not found!!!</h1>} />
    </Routes>
  );
}

export default App;
