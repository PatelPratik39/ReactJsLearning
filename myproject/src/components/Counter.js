import { Component } from "react";

class Counter extends Component {
  // AS per as OOPs concept, we all know that whne we call  a object in class, we have to have constructor()
  // in order to use the object

  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
    // alert('Ohh, why did You click me????')
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
    // alert('Ohh, why did You click me????')
  }
  render() {
    return (
      <div>
        <h3> Count Value is : {this.state.counter}</h3>
        <button onClick={() => this.increment()}> Increment</button>
        <br />
        <button onClick={() => this.decrement()}> Decrement</button>
      </div>
    );
  }
}
export default Counter;
