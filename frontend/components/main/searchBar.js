import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class SearchBar extends Component{

    render(){
        return(
          <div>
            <input type="search" className="mySearch" placeholder="Search" size="28" />
          </div>
          );
      }
  }