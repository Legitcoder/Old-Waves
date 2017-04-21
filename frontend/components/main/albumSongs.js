import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';
import Song from './song';



 class AlbumSongs extends Component{

  render(){
    const {album} = this.props;
      return(
      <div className="row">
          <div className="col-md-12 col-centered">
            <table className="song-list col-centered">
            <tbody className="songs">
        {
            album.songs.map(song =>{
              return(<Song song={song} key={song.id} />);
            })
        }
            </tbody>
            </table>
          </div>
        </div>
        );

    }
}


const mapStateToProps = (state) => {
  return {album: state.albums.album}
}

export default connect(mapStateToProps)(AlbumSongs)
