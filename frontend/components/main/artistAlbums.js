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
          <img src="https://fanart.tv/fanart/music/c0b58a7f-5615-4b22-8af4-8f16b10a0177/artistbackground/araabmuzik-5127d5562e2ff.jpg"  />
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
  return {artist: state.artists.artist}
}


export default connect(mapStateToProps, {fetchArtist})(ArtistAlbums)
