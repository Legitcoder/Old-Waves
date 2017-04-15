import React, {Component} from 'react';
import {connect} from 'react-redux';
import Album from './album';
import {fetchArtist} from '../../actions/index';

class ArtistAlbums extends Component{
  render(){
      return(
        <div>
        <div className="row">
          <div className="col-md-9 col-centered">
            <h1>Albums</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 col-centered">
            <ul>
            {
                this.props.artist.albums.map(album =>{
                  return(<Album album={album} key={album.id} />);
                })
            }
          </ul>
          </div>
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
