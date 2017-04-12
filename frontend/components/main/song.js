import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';



class Song extends Component{
  playSong(){
    var song = document.getElementById('song')
    debugger
    !song.paused && !song.ended ? song.pause() : song.play();
  }

  render(){
    const {song} = this.props;
    return(
        <li className="songs">
          <h4 onClick={this.playSong.bind(this)}>{song.title}</h4>
          <audio id="song"><source src={song.audio} /></audio>
        </li>
    );
  }
}

export default connect(null, null)(Song)
