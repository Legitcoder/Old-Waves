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
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                <li> <Link to={"/artists"}>Music</Link> </li>
                <li className="sidebar-brand"><a href="#">kkk</a></li>
                <li className="logout" onClick={this.logout.bind(this)}><a>Logout</a></li>
              </ul>
            </div>
          </div>
          );
      }
  }
