import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class SearchBar extends Component{

    render(){
        return(
          <div className="search-wrapper">
            <input type="search" className="mySearch" placeholder="Search" size="25" />
          </div>
          );
      }
  }
