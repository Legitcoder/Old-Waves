import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { authorizeUserLogin } from '../../actions/index';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
      <input {...input} className="form-control" type={type}/>
      {touched && (error && <div className="text-help">{error}</div>)}
  </div>
)

class Login extends Component {

  onSubmit(props){
    this.props.authorizeUserLogin(props);
    console.log(this.props);
    if(this.props.error){
    console.log(this.props.errorMessage);
    }
  }

    render(){
      const {handleSubmit} = this.props;
      console.log(this.props.error)
      return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field element="input" label="Username" name="username" type="text" component={renderField}/>
            <Field element="input" label="Password" name="password" type="password" component={renderField}/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }
}

function validate(values){
  const errors ={};
  if(!values.username){
    errors.username = 'Username cannot be empty';
  }
  if(!values.password){
    errors.password = 'Password cannot be empty';
  }
  return errors;
}

const mapStateToProps = (state) => {
  console.log(state.users..errorMessage);
  return {errorMessage: state.users.errorMessage};
}

Login = reduxForm({
  form: 'Login',
  validate,
  onSubmit: () => {}
})(Login);




export default connect(mapStateToProps,{authorizeUserLogin})(Login)
