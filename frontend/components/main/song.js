import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {selectSong} from '../../actions/index';



class Song extends Component{
  playPause(){
    console.log(this.props.song)
    this.props.selectSong(this.props.song);
    var song = document.getElementById('current');
    !song.paused && !song.ended ? song.pause() : song.play();
  }

  readableDuration(seconds) {
    var sec = Math.floor( seconds );
    var min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
  }

  render(){
    var songDuration = document.getElementById('song').duration;
    const {song} = this.props;
    return(
        <li className="songs">
          <h4 onClick={this.playPause.bind(this)}>{song.title}</h4>
          <h4>{this.readableDuration(songDuration)}</h4>
           <audio id="song"><source src={song.audio} /></audio>
        </li>
    );
  }
}

export default connect(null, {selectSong})(Song)
