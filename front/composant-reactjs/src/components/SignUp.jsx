import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div className="content">
        <h1>Your email is : {this.state.email}</h1>
        <input
          type="email"
          name="email"
          placeholder="Your email here"
          value={this.state.email}
          onChange={this.updateEmailField}
        />
      </div>
    );
  }
}

export default SignUp;
