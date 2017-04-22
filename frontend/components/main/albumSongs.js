import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import Song from './song';



 class AlbumSongs extends Component{

  render(){
    const {album} = this.props;
      return(
          <div >
            <table className="song-list">
            <tbody className="songs">
        {
            album.songs.map(song =>{
              return(<Song song={song} key={song.id} />);
            })
        }
            </tbody>
            </table>
          </div>
        );

    }
}


const mapStateToProps = (state) => {
  return {album: state.albums.album}
}

export default connect(mapStateToProps)(AlbumSongs)
