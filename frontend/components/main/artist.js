import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {fetchArtist} from '../../actions/index'



 class Artist extends Component{

  routeToArtistAlbums(){
    this.props.fetchArtist(this.props.artist)
    hashHistory.push('/ArtistAlbums');
  }

  render(){
    return(
      <div>
        <li>
          <h3>{this.props.artist.name}</h3>
          <img src={this.props.artist.image} onClick={this.routeToArtistAlbums.bind(this)}></img>
        </li>
      </div>
    );
  }
}

export default connect(null, {fetchArtist})(Artist)
