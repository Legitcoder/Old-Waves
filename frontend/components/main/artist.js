import React, {Component} from 'react';



export default class Artist extends Component{

  render(){
    return(
      <div>
        <li>
          <h3>{this.props.artist.name}</h3>
          <img src={this.props.artist.image}></img>
        </li>
      </div>
    );
  }
}
