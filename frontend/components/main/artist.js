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

        <li className="artists">
          <img src={artist.small_image} onClick={this.routeToArtistAlbums.bind(this)}></img>
          <h5>{artist.name}</h5>
        </li>

    );
  }
}

export default connect(null, {fetchArtist})(Artist)
