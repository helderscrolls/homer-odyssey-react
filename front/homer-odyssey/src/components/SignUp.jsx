import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      firstName: "James",
      lastName: "Bond"
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };
  updatePasswordField = event => {
    this.setState({ password: event.target.value });
  };
  updateFirstNameField = event => {
    this.setState({ firstName: event.target.value });
  };
  updateLastNameField = event => {
    this.setState({ lastName: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              placeholder="email"
              type="email"
              name="email"
              onChange={this.updateEmailField}
            />
          </label>
          <label>
            <input
              placeholder="password"
              type="text"
              onChange={this.updatePasswordField}
            />
          </label>
          <label>
            <input
              placeholder="confirm your password"
              onChange={this.checkPassword}
            />
          </label>
          <label>
            <input
              placeholder="firstName"
              type="text"
              onChange={this.updateFirstNameField}
            />
          </label>
          <label>
            <input
              placeholder="lasNname"
              type="text"
              onChange={this.updateLastNameField}
            />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default SignUp;
