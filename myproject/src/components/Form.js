import { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: " "
  };
  handleChange = (event) => {
    this.setState({
      firstName: event.target.value
    });
    // console.log(this.state.firstName);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
        fname: this.state.firstName,
        lname : this.state.lastName
    });
  }
  render() {
    return (
      <div>
        Form
        <form onSubmit={this.handleSubmit}>
          {/* Note -> In React whenever we try to create a inout field in form, we alwys have to "onCHnage "event */}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />{" "}
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          /><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;
