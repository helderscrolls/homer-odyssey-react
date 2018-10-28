import React, { Component } from "react";
import "../App.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { lastname: "", firstname: "", email: "", password: "" };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updateFirstnameField = this.updateFirstnameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateEmailField(event) {
    this.setState({
      email: event.target.value
    });
  }

  updatePasswordField(event) {
    this.setState({
      password: event.target.value
    });
  }

  updateLastnameField(event) {
    this.setState({
      lastname: event.target.value
    });
  }

  updateFirstnameField(event) {
    this.setState({
      firstname: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("A name was submitted : " + this.state);
  }

  render() {
    return (
      <div>
        <form>
          <h2>{JSON.stringify(this.state)}</h2>
          <label htmlFor="lastname">Your lastname :</label>
          <input
            id="lastname"
            type="lastname"
            name="lastname"
            onChange={this.updateLastnameField}
          />
          <br />
          <label htmlFor="firstname">Your firstname :</label>
          <input
            id="firstname"
            type="firstname"
            name="firstname"
            onChange={this.updateFirstnameField}
          />
          <br />
          <label htmlFor="email">Your e-mail address :</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={this.updateEmailField}
          />
          <br />
          <label htmlFor="password">Your password :</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={this.updatePasswordField}
          />
          <br />
          <label htmlFor="passwordBis">Confirm your password :</label>
          <input id="passwordBis" type="password" name="passwordBis" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
