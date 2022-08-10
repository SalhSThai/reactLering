import logo from './logo.svg';
import './App.css';


const hChange = function (event) {
  console.log( event.target.value); {/* LAB 02 */ }
};
const hcChange = function (event) {
  console.log( event.target.value); {/* LAB 03 */ }
};
const confirm = function (event) {
  let boo = (window.confirm("Leave for https://google.com"));
   boo? window.location.href("https://google.com"):event.preventDefault() ;
  console.log(boo);
}

function App() {


  return (
    <div>
      <input type="text" onChange={hChange}></input>{/* LAB 01 */}

      <select onChange={hChange}> {/* LAB 02 */}
        <option>กรุงเทพ</option>
        <option>กระบี่</option>
        <option>กาญจนบุรี</option>
        <option>กาฬสินธุ์</option>
        <option>กำแพงเพชร</option>
      </select>

      {/* LAB 03 */}
      <input onChange={hcChange} type="checkbox" id="phoneBrand" name="iPhone" value="iPhone" defaultChecked></input>
      <label htmlFor='iPhone'>iPhone</label>
      <input onChange={hcChange} type="checkbox" id="phoneBrand" name="Samsung" value="Samsung" defaultChecked></input>
      <label htmlFor='Samsung'>Samsung</label>
      <input onChange={hcChange} type="checkbox" id="phoneBrand" name="OPPO" value="OPPO" defaultChecked></input>
      <label htmlFor='OPPO'>OPPO</label>
      {/* LAB 04 */}
      <br></br>
      <a onClick={confirm} href="https://google.com" >Go!!!!</a>

    </div>
  );
}

export default App;
