import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import Song from './song';



 class AlbumSongs extends Component{

  render(){
    const {album} = this.props;
      return(
          <div className="song-table-wrapper" >
            <img src="https://fanart.tv/fanart/music/c0b58a7f-5615-4b22-8af4-8f16b10a0177/artistbackground/araabmuzik-5127d5562e2ff.jpg"  />
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
