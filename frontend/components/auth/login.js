import React, { Component } from 'react';
import * as actions from '../../actions'
import { reduxForm } from 'redux-form';

class Login extends Component {
    render(){
      const { fields: {username, password}, handleSubmit } = this.props;

      return(
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
    }
}

export default reduxForm({
  form: 'Login',
  fields: ['username', 'password']
})(Login);
