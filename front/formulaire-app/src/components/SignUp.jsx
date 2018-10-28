import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordVerification: "",
      name: "",
      lastName: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordVerificationField = this.updatePasswordVerificationField.bind(
      this
    );
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastNameField = this.updateLastNameField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }

  updatePasswordVerificationField(event) {
    this.setState({ passwordVerification: event.target.value });
  }

  updateNameField(event) {
    this.setState({ name: event.target.value });
  }

  updateLastNameField(event) {
    this.setState({ lastName: event.target.value });
  }

  handleSubmit(event) {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
      passwordVerification: "",
      name: "",
      lastName: ""
    });
    alert("Your information has been submitted");
  }

  render() {
    return (
      <div className="display">
        <h3 className="idInfo">
          Verify your information: {JSON.stringify(this.state)}
        </h3>
        <form className="content" onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.updateEmailField}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.updatePasswordField}
          />
          <br />
          <input
            type="password"
            name="passwordVerification"
            placeholder="Please re-enter your password"
            value={this.state.passwordVerification}
            onChange={this.updatePasswordVerificationField}
          />
          <br />
          <input
            type="text"
            name="name"
            placeholder="Your name here"
            value={this.state.name}
            onChange={this.updateNameField}
          />
          <br />
          <input
            type="text"
            name="last_name"
            placeholder="Your last name here"
            value={this.state.lastName}
            onChange={this.updateLastNameField}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
