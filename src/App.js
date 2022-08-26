import React, { Component } from "react";
import { render } from "react-dom";

// class App extends React.Component {

// declare state#1
// constructor(props){
//   super(props);
//   this.state = {
//     count:0,
//     error:''
//   };
//   this.handleClickDecreaseBtn = this.handleClickDecreaseBtn.bind(this)
// }
// declare state#2
// state = {
//   count: 0,
//   error: ''
// }

// handleClickDecreaseBtn = () => {
//   if (this.state.count > 0) {
//     this.setState({ count: this.state.count - 1 });
//   }
// }
//   handleClickDecreaseBtn(){
//     if (this.state.count > 0) {
//       this.setState({ count: this.state.count - 1 });
//     }
//   }
//   render() {
//     return <div style={{ textAlign: 'center' }}>

//       <h1>React class Component</h1>
//       <h2>{this.state.count}</h2>
//       <button className="btn btn-outline-success" onClick={() => {//updateStateFn:setState
//         this.setState({ count: this.state.count + 1 })

//       }}>+</button>
//       <button className="btn btn-outline-danger" onClick={this.handleClickDecreaseBtn}>-</button>
//       <p>{this.state.count}</p>
//     </div>
//   }
// }

// class App {
//   //property
//   name = 'John';
//   age = 20;
//   //method
//   constructor() {

//   }
// getName(){
//   return this.name;
// }


// }
// const obj = new App();
//================================================================
// class App extends Component {
//   state = { count: 0 }
//   render() {
//     return <div style={{ textAlign: 'center' }}>
//       <h1>Counter App</h1>
//       <CounterHeader count={this.state.count} />
//       <Button onClick={()=>this.setState({count:this.state.count+1})}>+</Button>
//       <Button>-</Button>
//     </div>

//   }
// }
// class CounterHeader extends Component {
//   render(){
//     return <h2>{this.props.count}</h2>
//   }
// }

// class Button extends Component {
//   render() {
//     return <button>{this.props.children}</button>
//   }
// }
// function CounterHeader(props) {
//   return <h2>{props.count}</h2>
// }


//====================================================================================
class App extends Component {
  ar = () => {
    console.log(this, 'Arrow');
  }
  Fn(params) {
    console.log(this, 'Fn', params);
  }
  constructor(props) {
    super(props);
    console.log(this, 'Constructor Run');
    this.state = { toggle: false };
    this.Fn()
    this.ar();
  }
  componentDidMount() {
    console.log(this, 'ComponentDidMount');
  }
  componentDidUpdate() {
    console.log(this, 'componentDidUpdate');
  }
  render() {
    console.log(this, 'Render Run');
    return <div onClick={() => this.setState({ toggle: !this.state.toggle })}>Render<br /><button onClick={this.Fn}></button>
      <br />
      <Toggle ></Toggle>

    </div>
  }
}
class Toggle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');

  }

  componentDidMount() {
    console.log(this, 'ComponentDidMount');
  }
  componentDidUpdate() {
    console.log(this, 'componentDidUpdate');
  }
  componentWillUnmount(){
    console.log(this, 'componentWillUnmount')
  }

  render() {
    return <div>toggle</div>
  }

}

export default App;
// function b(){
//   console.log(this);
// }
// b();
// const obj = {name:'John'}
// const a = b.bind(obj);
// a();