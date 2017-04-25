import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {selectSong} from '../../actions/index';



class Song extends Component{
  playPause(){
    this.props.selectSong(this.props.song);
    var song = document.getElementById('current');
    var pauseButton = document.getElementById('pauseButton');
    var playButton = document.getElementById('playButton');
    if(!song){
      var song = document.createElement('audio');
      song.setAttribute('id', 'current');
      debugger;
      song.append('audio-wrapper');
      song.play();
    }
    else if(song && !song.paused && !song.ended){
      song.pause();
      song.onplay = () => pauseButton.setAttribute('id', 'pauseButton');
      song.paused ? pauseButton.setAttribute('id', 'playButton') : '';

    }
    else {
      playButton ? playButton.setAttribute('id', 'pauseButton') : pauseButton.setAttribute('id', 'playButton');
      setTimeout(function () {
        song.play();
      }, 75);
    }
  }

  render(){
    const {song} = this.props;
    return(
          <tr className="table-row">
           <td className="playButton-td"  onClick={this.playPause.bind(this)}></td>
           <td width="95%">{song.title}</td>
           <td width="1%">{song.length}</td>
           </tr>
    );
  }
}

export default connect(null, {selectSong})(Song)
