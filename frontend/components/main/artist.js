import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {fetchArtist} from '../../actions/index'



 class Artist extends Component{

  routeToArtistAlbums(){
    const {artist} = this.props;
    this.props.fetchArtist(artist)
    hashHistory.push(`artists/${artist.id}/${artist.name}`);
  }

  render(){
    const {artist} = this.props;
    return(
      <div>
        <li className="artists">
          <img src={artist.small_image} onClick={this.routeToArtistAlbums.bind(this)}></img>
          <h4>{artist.name}</h4>
        </li>
      </div>
    );
  }
}

export default connect(null, {fetchArtist})(Artist)
