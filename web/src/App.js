import React, { Component } from 'react';
import logo from './logo.svg';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import cors from 'cors';
import './App.css';



class App extends Component {

  handleLogout(event){
    localStorage.setItem('isLoggedin',false);
  }
  
  render() {
    let Log = localStorage.getItem('isLoggedin');
    let button;
    if(Log == 'true'){
      button =  <div>
                  Hello {localStorage.getItem('name')} 
                  <form  onSubmit = {this.handleLogout}>
                    <input type="submit" value ="Logout" />
                  </form>  
                </div>;
    }
    return (
      <div className="App">
        <header 
        className="App-header">
          {button}
          <SignUpForm />
          <SignInForm />
        </header>
      </div>
    );
  }
}

export default App;
