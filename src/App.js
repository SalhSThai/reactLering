import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import classes from './style.module.css'
import provincesModule from './provinces.module'
import { click } from '@testing-library/user-event/dist/click';

function App() {
  const [hiText, setHiText] = useState("text");
  const [chText, setchText] = useState("Hide");
  const [phone, setPhone] = useState(0);
  const [input, setInput] = useState(0);
  const [warning, setWarning] = useState('')
  const [provinces, setProvinces] = useState('')
  const [provincesArr, setProvincesArr] = useState([]);
  const [districtArr, setDistrictArr] = useState([]);

  fetch("https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/")
    .then((respones) => respones.json())
    .then((json) => json.data.map(item => item.province))
    .then((temp) => setProvincesArr(temp))
    .catch(error => { console.error(error); })

  // LAB 01
  const hide = function (event) {
    event.target.className = classes.hideClass;
    setTimeout(() => {
      event.target.className = classes.showClass;
    }, 2000);
    console.log(1, event.target.className.hideClass)
  }
  // LAB 02
  const HideText = function (event) {
    setHiText(classes.hideClass);
    setTimeout(() => {
      setHiText(classes.showClass);
    }, 2000);
  }

  // LAB 03
  const HideTextnChange = function (event) {
    if (chText == "Hide") {
      setHiText(classes.hideClass);
      setchText("Show")
    } else {
      setHiText(classes.showClass);
      setchText("Hide")
    }
  }
  // LAB 04
  const convertor = function (event) {
    setInput(event.target.value);
  }
  // LAB 05
  const detector = function (event) {
    setPhone(event.target.value)
  }
  const submit = function (event) {
    if (phone == '') {
      setWarning("Phone Number is required")
    }
    else if (isNaN(phone)) {
      setWarning("Phone Number is Invalid")
    }
    else if (String(phone).length == 10) {
      console.log(phone)
      alert("Your Number is Valid");
      setWarning("Your Number is Valid");
    }
    else {
      setWarning("Invalid length")
    }
  }
  // LAB 06
  const putOption = (arr) => {
    const newArr = arr.map(item => {
      return <option>{item}</option>
    })
    return newArr;
  }
  const changeProvince = e => {
    setProvinces((c) => c = e.target.value);
  }
  const changeDistrict = () => {
    const url = "https://thaiaddressapi-thaikub.herokuapp.com/v1/thailand/provinces/" + provinces;
    fetch(url)
      .then((respones) => respones.json())
      .then((json) => json.data.map(item => item.district))
      .then((temp) => setDistrictArr(temp))
      .catch(error => { console.error(error); })
  }




  return (

    <div style={{ height: "100vh", width: "100vw", display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: "24px" }} >
      {/* LAB 01 */}
      <button onClick={hide}>Click to hide me 01</button>
      {/* LAB 02 */}
      <button onClick={HideText} >Click to hide text</button>
      <h1 className={hiText} >TEXT</h1>
      {/* LAB 03 */}
      <button onClick={HideTextnChange} >{chText}</button>
      <h1 className={hiText} >Change Hide</h1>
      {/* LAB 04 */}
      <div><label>Enter Dollar: </label><input type="text" onChange={convertor} ></input></div>
      <div> <h3 style={{ display: "inline-block" }}>Convert to Bath:</h3>    <h3 style={{ display: "inline-block", color: "red" }}>{input * 30}</h3>   <h3 style={{ display: "inline-block" }}>Bath</h3> </div>
      {/* LAB 05 */}
      <div><input type="text" onChange={detector}></input><button onClick={submit}>Check</button><br />  <h3 style={{ color: "red" }}>{warning} </h3> </div>
      {/* LAB 06 */}
      <div>
        <label>Province : </label>
        <select onChange={changeProvince}>
          <option value="" selected disabled hidden >Select</option>
          {putOption(provincesArr)}
        </select><br />
        <label>District : </label>
        <select onClick={changeDistrict}>
          <option value="" selected disabled hidden >Select</option>
          {putOption(districtArr)}
        </select><br />

      </div>


    </div>
  );
}

export default App;
