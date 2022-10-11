
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { countAction } from './redux/store';

function App() {
  const count = useSelector(state => state.count.count);
  const dispatch = useDispatch()
  console.log(count);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>dispatch(countAction.increase())}>+</button>
      <button onClick={()=>dispatch(countAction.decrease())}>-</button>
      <button onClick={()=>dispatch(countAction.increase(2))}>Increase by two</button>
    </div>
  );
}

export default App;
