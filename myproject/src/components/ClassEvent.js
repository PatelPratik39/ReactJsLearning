import { Component } from "react";

class ClassEvent extends Component {
  handleClick() {
    console.log("Class Based Class Event Component");
  }
  render() {
    return (
      <div>
        This is Class based Component :
        <button onClick={this.handleClick}>Click me again </button>
      </div>
    );
  }
}
export default ClassEvent;
