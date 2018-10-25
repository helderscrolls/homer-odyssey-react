import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fistName: "",
      lastName: ""
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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state)}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email
            <input type="email" name="email" onChange={this.updateEmailField} />
          </label>
          <label>
            Password
            <input
              type="text"
              name="password"
              onChange={this.updatePasswordField}
            />
          </label>
          <label>
            Confirm your password
            <input type="text" name="checkPassword" />
          </label>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              onChange={this.updateFirstNameField}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              onChange={this.updateLastNameField}
            />
          </label>
          <input type="submit" value="send" />
        </form>
      </div>
    );
  }
}

export default SignUp;
