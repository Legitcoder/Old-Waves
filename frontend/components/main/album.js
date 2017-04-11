import React, {Component} from 'react';
import {connect} from 'react-redux';



 export default class Album extends Component{

  render(){
    return(
        <li className="albums">
          <h4>{this.props.album.title}</h4>
          <img src={this.props.album.small_url}></img>
        </li>
    );
  }
}
