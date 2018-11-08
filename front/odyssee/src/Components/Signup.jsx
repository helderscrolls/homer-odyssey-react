import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "mon@email.com",
      password: "monPassw0rd",
      name: "James",
      lastname: "Bond"
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  updatePasswordField(event) {
    this.setState({ password: event.target.value });
  }

  updateNameField(event) {
    this.setState({ name: event.target.value });
  }

  updateLastnameField(event) {
    this.setState({ lastname: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <h1>{JSON.stringify(this.state)}</h1>
          <p>email</p>
          <input
            type="email"
            name="email"
            onChange={this.updateEmailField.bind(this)}
          />
          <br />
          <br />
          <p>password</p>
          <input
            type="password"
            name="password"
            onChange={this.updatePasswordField.bind(this)}
          />
          <br />
          <br />
          <p>password verification</p>
          <input
            type="password"
            name="password"
            onChange={this.updatePasswordField.bind(this)}
          />
          <br />
          <br />
          <p>name</p>
          <input
            type="name"
            name="name"
            onChange={this.updateNameField.bind(this)}
          />
          <br />
          <br />
          <p>lastname</p>
          <input
            type="lastname"
            name="lastname"
            onChange={this.updateLastnameField.bind(this)}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Signup;
