import React, {Component} from 'react';
import { connect } from 'react-redux';
import User from './user'
import { fetchUsers } from '../../actions/index';

class Users extends Component{
  componentDidMount(){
    this.props.fetchUsers();
  }
    render(){
        return(
          <div>
          <h1 className="section-title">Social</h1>
          <ul>
          {
              this.props.users.map(user =>{
                return(<User user={user} key={user.id} />);
              })
          }
          </ul>
          </div>
          );
      }
  }



const mapStateToProps = (state) =>{
  return {users: state.users.all}
}

export default connect(mapStateToProps, {fetchUsers})(Users)
