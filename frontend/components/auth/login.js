import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { authorizeUserLogin } from '../../actions/index';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';


class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      username: this.refs.username.value,
      password: this.refs.password.value
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



    render(){
      return(
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
      );
    }
}


const mapStateToProps = (state) =>{
  return {errorMessage: state.users.errorMessage};
}

export default connect(mapStateToProps,{authorizeUserLogin})(Login)
