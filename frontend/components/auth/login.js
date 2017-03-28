import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorizeUserLogin } from '../../actions/index';
import SignUp from './signup';


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      displaySignupForm: false,
      username: "",
      password: ""
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const {username, password} = this.refs;
    this.setState({
      username: username.value,
      password: password.value
    }, () => this.props.authorizeUserLogin(this.state)
  );
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
        )
    }
  }

  renderSignUpForm(){
    if(this.state.displaySignupForm){
      $('.sign-up-button').hide();
      return <SignUp />;
    }
  }

    render(){
      return(
        <div>
        <form onSubmit={this.handleSubmit.bind(this)}>

        <fieldset className="form-group">
            <label>Username</label>
            <input ref="username" className="form-control" type="text" name="username" placeholder="Enter Username" />
          </fieldset>

          <fieldset className="form-group">
            <label>Password</label>
            <input ref="password" className="form-control" type="password" name="password" placeholder="Enter Password" />
          </fieldset>

          {this.renderAlert()}

          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
        <button type="submit" onClick={() => this.setState({displaySignupForm: true})} className=" sign-up-button btn btn-primary">Register</button>
        {this.renderSignUpForm()}
        </div>
      );
    }
}


const mapStateToProps = (state) =>{
  return {errorMessage: state.users.errorMessage};
}

export default connect(mapStateToProps,{authorizeUserLogin})(Login)
