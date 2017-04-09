import React, {Component} from 'react';
import {connect} from 'react-redux';



 export default class Album extends Component{

  render(){
    return(
      <div>
        <li>
          <h3>{this.props.album.title}</h3>
          <img src={this.props.album.small_url}></img>
        </li>
      </div>
    );
  }
}
