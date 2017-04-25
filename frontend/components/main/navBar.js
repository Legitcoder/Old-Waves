import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearLocalStorage} from '../localStorage';
import {hashHistory, Link} from 'react-router';

export default class NavBar extends Component{

  logout(){
    clearLocalStorage();
    hashHistory.push('/login');
  }



    render(){
        return(
          <div id="wrapper">
              <ul className="sidebar-nav">
                <li className="sidebar-icon"> <Link to={"/artists"}>Music</Link> </li>
                <li className="sidebar-icon" onClick={this.logout.bind(this)}><a>Logout</a></li>
              </ul>
          </div>
          );
      }
  }
