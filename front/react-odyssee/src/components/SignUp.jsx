import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "lalala@lalala.com" };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField(event) {
    let value = event.target.value;
    this.setState({
      email: event.target.value,
      value: value
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <label htmlFor="email">Your e-mail address please :</label>
        <input
          id="email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.updateEmailField}
        />
      </div>
    );
  }
}

export default SignUp;
