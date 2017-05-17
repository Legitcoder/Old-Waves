import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {fetchUser} from '../../actions/index'



 class User extends Component{

  routeToUserProfile(){
    const {user} = this.props;
    this.props.fetchUser(user)
    hashHistory.push(`users/${user.id}/${user.username}`);
  }

  render(){
    const {user} = this.props;
    return(
        <li onClick={this.routeToUserProfile.bind(this)} >
          <img src={user.medium_image}></img>
          <h5>{user.name}</h5>
        </li>
    );
  }
}

export default connect(null, {fetchUser})(User)
