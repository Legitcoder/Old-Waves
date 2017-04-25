import React, {Component} from 'react';
import {connect} from 'react-redux';
import Album from './album';
import {fetchArtist} from '../../actions/index';

class ArtistAlbums extends Component{
  render(){
          if(!this.props.artist){
            return(<div>Loading...</div>);
          }
          else{
          return(
          <div>
          <h1 className="section-title">Albums</h1>
            <ul>
            {
                this.props.artist.albums.map(album =>{
                  return(<Album album={album} key={album.id} />);
                })
            }
          </ul>
          </div>
        );
      }
    }
}


const mapStateToProps = (state) => {
  console.log(state.artists.artist);
  return {artist: state.artists.artist}
}


export default connect(mapStateToProps, {fetchArtist})(ArtistAlbums)
