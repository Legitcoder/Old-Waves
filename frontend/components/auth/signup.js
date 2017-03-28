import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/index'

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      user:{
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const {firstName, username, lastName, email, password} = this.refs;
    this.setState({
      user: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      username: username.value,
      password: password.value
    }
    },
    () => this.props.createNewUser(this.state)
  );
  }


    render(){
      return(
        <form onSubmit={this.handleSubmit.bind(this)}>

        <fieldset className="form-group">
            <label>First Name</label>
            <input ref="firstName" className="form-control" type="text" name="user[firstName]" placeholder="Enter First Name" />
          </fieldset>

          <fieldset className="form-group">
              <label>Last Name</label>
              <input ref="lastName" className="form-control" type="text" name="user[lastName]" placeholder="Enter Last Name" />
          </fieldset>

          <fieldset className="form-group">
                <label>Email</label>
                <input ref="email" className="form-control" type="text" name="user[email]" placeholder="Enter Email" />
          </fieldset>

          <fieldset className="form-group">
            <label>Username</label>
            <input ref="username" className="form-control" type="text" name="user[username]" placeholder="Enter Username" />
          </fieldset>

          <fieldset className="form-group">
            <label>Password</label>
            <input ref="password" className="form-control" type="password" name="user[password]" placeholder="Enter Password" />
          </fieldset>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      );
    }
}


export default connect(null, {createNewUser})(SignUp)
