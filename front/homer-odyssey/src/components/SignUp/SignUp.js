import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  };

  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };

  updatePasswordField = event => {
    this.setState({ password: event.target.value });
  };

  updateConfirmPasswordField = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  updateFirstNameField = event => {
    this.setState({ firstName: event.target.value });
  };

  updateLastNameField = event => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            name="email"
            onChange={this.updateEmailField}
          />

          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            onChange={this.updatePasswordField}
          />

          <label htmlFor="confirmPassword">Confirm your password: </label>
          <input
            type="password"
            name="confirmpassword"
            onChange={this.updateConfirmPasswordField}
          />

          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            onChange={this.updateFirstNameField}
          />

          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            onChange={this.updateLastNameField}
          />

          <input
            type="submit"
            value="Soumettre"
          />
        </form>
      </div>
    )
  }
}

export default SignUp
