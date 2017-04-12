import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {selectSong} from '../../actions/index';



class Song extends Component{
  playPause(){
    this.props.selectSong(this.props.song);
    // var song = document.getElementById('song');
    // !song.paused && !song.ended ? song.pause() : song.play();
  }

  render(){
    const {song} = this.props;
    return(
        <li className="songs">
          <h4 onClick={this.playPause.bind(this)}>{song.title}</h4>
          // <audio id="song"><source src={song.audio} /></audio>
        </li>
    );
  }
}

export default connect(null, {selectSong})(Song)
