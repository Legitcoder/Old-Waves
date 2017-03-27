import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const {firstName, username, lastName, email, password} = this.refs;
    this.setState({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      username: username.value,
      password: password.value,
    }
  );
  }


    render(){
      return(
        <form onSubmit={this.handleSubmit.bind(this)}>

        <fieldset className="form-group">
            <label>First Name</label>
            <input ref="firstName" className="form-control" type="text" name="firstName" placeholder="Enter First Name" />
          </fieldset>

          <fieldset className="form-group">
              <label>Last Name</label>
              <input ref="lastName" className="form-control" type="text" name="lastName" placeholder="Enter Last Name" />
          </fieldset>

          <fieldset className="form-group">
                <label>Email</label>
                <input ref="email" className="form-control" type="text" name="email" placeholder="Enter Email" />
          </fieldset>

          <fieldset className="form-group">
            <label>Username</label>
            <input ref="username" className="form-control" type="text" name="username" placeholder="Enter Username" />
          </fieldset>

          <fieldset className="form-group">
            <label>Password</label>
            <input ref="password" className="form-control" type="password" name="password" placeholder="Enter Password" />
          </fieldset>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      );
    }
}


export default SignUp
