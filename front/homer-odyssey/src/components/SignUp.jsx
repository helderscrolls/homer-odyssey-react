import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label>
            <h1>Email: {this.state.email}</h1>
            <input
              placeholder="email"
              type="email"
              name="email"
              onChange={this.updateEmailField}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SignUp;
