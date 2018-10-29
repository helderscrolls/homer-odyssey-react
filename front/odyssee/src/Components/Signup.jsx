import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }
  render() {
    return (
      <div>
        <p>email</p>
        <h1>{this.state.email}</h1>
        <input
          type="email"
          name="email"
          onChange={this.updateEmailField.bind(this)}
        />
      </div>
    );
  }
}

export default Signup;
