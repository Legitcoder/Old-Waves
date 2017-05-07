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
    var playButtonTd = document.getElementById('playButton-td');

    if(song && !song.paused && !song.ended){
      song.pause();
      window.clearInterval(window.updateTime);
      song.onplay = () => {
        pauseButton.setAttribute('id', 'pauseButton');
        window.updateTime = setInterval(this.update.bind(this), 500);
      }
    }
    else {
      playButton ? playButton.setAttribute('id', 'pauseButton') : pauseButton.setAttribute('id', 'playButton');
      setTimeout(function () {
        song.play();
      }, 500);
      window.updateTime = setInterval(this.update.bind(this), 500);
    }
  }

  update(){
    var song = document.getElementById('current');
    var progressBar = document.getElementById('progressBar');
    var pauseButton = document.getElementById('pauseButton');
    var currentTime = document.getElementById('currentTime');
    var playedMinutes = parseInt(song.currentTime/60);
    var playedSeconds = parseInt(song.currentTime%60);
    playedSeconds < 10 ? playedSeconds = `0${playedSeconds}` : '';
    if(song && !song.ended){
       currentTime.innerHTML = `${playedMinutes}:${playedSeconds}`;
       var size = parseInt(song.currentTime*100/song.duration);
       progressBar.style.width = size + "%";
    }
    else{
       currentTime.innerHTML = "0:00";
       song.pause();
       if(pauseButton){
         pauseButton.setAttribute('id', 'playButton')
       }
       progressBar.style.width = "0%";
       window.clearInterval(window.updateTime);
    }
  }

  render(){
    const {song} = this.props;
    return(
        <div className="song-list-container">
          <table className="song-list">
          <tbody className="songs">
          <tr className="table-row">
           <td id="playButton-td"  onClick={this.playPause.bind(this)}></td>
           <td className="song-title-td">{song.title}</td>
           <td width="1%">{song.length}</td>
           </tr>
           </tbody>
           </table>
        </div>
    );
  }
}

export default connect(null, {selectSong})(Song)
