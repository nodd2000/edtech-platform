import React from "react"

import { Link } from "react-router-dom";

import "./LoginForm.css"


class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
        };
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeUsername(event) {    this.setState({username: event.target.value});  }

    handleChangePassword(event) {    this.setState({password: event.target.value});  }

    handleSubmit(event) {
      alert('Отправленное имя: ' + this.state.username + this.state.password);
      event.preventDefault();
    }
  
    render() {
      return (
        <div> 
            <form className='login-form'  onSubmit={this.handleSubmit}>
                <h3 class="div">Please sign in</h3>
                <input className='div' type="text" placeholder='Username' onChange={this.handleChangeUsername} />
                <input className='div' type="password" placeholder='Password' onChange={this.handleChangePassword} />
                <input className='div' type="submit" value="Sign In" />
                <p class="div"> New User? <Link to="/register">Click to Register!</Link></p>
            </form>

            

        </div>
      );
    }
  }


export default LoginForm;