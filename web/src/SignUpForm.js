import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target_name = event.target.name, target_value = event.target.value;
    if (target_name === 'username') {
      this.state.username = target_value;
    } else if (target_name === 'email') {
      this.state.email = target_value
    } else {
      this.state.password = target_value
    }
  }

  handleSubmit(event) {    
    alert(`A user was registered: ${this.state.username}, ${this.state.email}, ${this.state.password}`);

    axios.post(
        'http://localhost:3001/api/v1/sign_up',
        qs.stringify({
          session: {
            name: `${this.state.username}`,
            email: `${this.state.email}`,
            password: `${this.state.password}`              
          }
        })
      ).then(response => {
        alert(response.data.name);
      })
      .catch(function (error) {
        console.log(error);
      })

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Sign Up </h1>
        <label>
          Name:
          <input type="text" name="username" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUpForm;
