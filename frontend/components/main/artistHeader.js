import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArtistHeader extends Component{

    render(){
      const {artist} = this.props;
        return(
          <div className="artist-header">
            <img className="artist-header-image" src={artist.image.url}  />
            <h1 className="artist-header-name">{artist.name}</h1>
            <img className="artist-circle-image" src={artist.image.url}  />
          </div>
          );
      }
  }

const mapStateToProps = (state) =>{
    return {artist: state.artists.artist}
  }

export default connect(mapStateToProps)(ArtistHeader)
