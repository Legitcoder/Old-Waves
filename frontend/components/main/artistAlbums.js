import React, {Component} from 'react';
import {connect} from 'react-redux';
import Album from './album';
import {fetchArtist} from '../../actions/index';

class ArtistAlbums extends Component{

  componentDidUpdate(){
    this.props.fetchArtist(this.props.artist);
  }

  render(){
    if(!this.props.artist){
      return <div>Loading</div>;
    }
    else{
      return(
        <ul className="albums">
        {
            this.props.artist.albums.map(album =>{
              return(<Album album={album} key={album.id} />);
            })
        }
        </ul>
        );
      }
    }
}


const mapStateToProps = (state) => {
  console.log(state.artists.artist);
  return {artist: state.artists.artist}
}


export default connect(mapStateToProps, {fetchArtist})(ArtistAlbums)
