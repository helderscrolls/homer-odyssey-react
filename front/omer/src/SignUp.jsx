import React, { Component } from "react";

class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      firstName: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };
  updatePasswordField = event => {
    this.setState({ password: event.target.value });
  };
  updateNameField = event => {
    this.setState({ name: event.target.value });
  };
  updateFirstNameField = event => {
    this.setState({ firstName: event.target.value });
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
            Email :
            <input type="email" name="email" onChange={this.updateEmailField} />
          </label>
          <label>
            Password :
            <input
              type="text"
              name="password"
              onChange={this.updatePasswordField}
            />
          </label>
          <label>
            Control Password :<input type="text" name="Controlpassword" />
          </label>
          <label>
            Name :
            <input type="text" name="name" onChange={this.updateNameField} />
          </label>
          <label>
            First name :
            <input
              type="text"
              name="firstname"
              onChange={this.updateFirstNameField}
            />
          </label>

          <input type="Submit" value="Send" />
        </form>
      </div>
    );
  }
}
export default SignUP;
