import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class NavBar extends Component{

    render(){
        return(
          <div id="wrapper">
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                <li className="sidebar-brand"><a href="#">Home</a></li>
                <li><a href="#">Another link</a></li>
                <li><a href="#">Next link</a></li>
                <li><a href="#">Last link</a></li>
              </ul>
            </div>
          </div>
          );
      }
  }
