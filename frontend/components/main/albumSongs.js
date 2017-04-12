import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';



 class AlbumSongs extends Component{

  // routeToArtistAlbums(){
  //   const {artist} = this.props;
  //   this.props.fetchArtist(artist)
  //   hashHistory.push(`artists/${artist.id}/${artist.name}`);
  // }

  render(){
    const {album} = this.props;
    if(!album){
      return <div><h3>Loading</h3></div>;
    }
    else{
      return(
        <ul>
        {
            album.songs.map(song =>{
              return(<Song song={song} key={song.id} />);
            })
        }
        </ul>
        );
      }
    }
}


const mapStateToProps = (state) => {
  return {album: state.albums.album}
}

export default connect(mapStateToProps)(AlbumSongs)
