import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }


  handleChange(event) {
    let target_name = event.target.name, target_value = event.target.value;
    if (target_name === 'email') {
      this.state.email = target_value
    } else {
      this.state.password = target_value
    }
  }
  handleSubmit(event) {
    axios.post(
        'http://localhost:3001/api/v1/sign_in',
        qs.stringify({
          session: {
            email: `${this.state.email}`,
            password: `${this.state.password}`              
          }
        })
      ).then(response => {
        alert(response.data.name);
        // save to localStorage
      })
      .catch(function (error) {
        console.log(error);
      })
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Sign In </h1>
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

export default SignInForm;
