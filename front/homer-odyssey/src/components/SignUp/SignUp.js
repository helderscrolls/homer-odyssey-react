import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          name="email"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default SignUp
