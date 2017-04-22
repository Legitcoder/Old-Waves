import React, {Component} from 'react';
import {connect} from 'react-redux';
import Album from './album';
import {fetchArtist} from '../../actions/index';

class ArtistAlbums extends Component{
  render(){
      return(
        <div>
          <div>
          <h1>Artists</h1>
            <ul>
            {
                this.props.artist.albums.map(album =>{
                  return(<Album album={album} key={album.id} />);
                })
            }
          </ul>
          </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
  console.log(state.artists.artist);
  return {artist: state.artists.artist}
}


export default connect(mapStateToProps, {fetchArtist})(ArtistAlbums)
