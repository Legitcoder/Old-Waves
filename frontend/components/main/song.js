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

  secondsToDuration(seconds){
    var minutes = Math.floor(seconds/60);
    var sec = Math.floor(seconds % 60);
    sec < 10 ? sec*=10 : sec;
    return `${minutes}:${sec}`;
  }



  render(){

    const {song} = this.props;
    return(
        <li className="songs">
          <h4 onClick={this.playPause.bind(this)}>{song.title}</h4>
          <h4>{this.secondsToDuration(song.duration)}</h4>
        </li>
    );
  }
}

export default connect(null, {selectSong})(Song)