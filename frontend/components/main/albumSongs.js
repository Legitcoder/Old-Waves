import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import Song from './song';
import ArtistHeader from './ArtistHeader'



 class AlbumSongs extends Component{

  render(){
    const {album} = this.props;
      return(
        <div overflow="scroll">
          <ArtistHeader />
          <div className="song-table-wrapper" >
        {
            album.songs.map(song =>{
              return(<Song song={song} key={song.id} />);
            })
        }
          </div>
        </div>
        );

    }
}


const mapStateToProps = (state) => {
  return {album: state.albums.album}
}

export default connect(mapStateToProps)(AlbumSongs)
