import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicPlayer extends Component{

  componentWillUpdate(){
    var currentSong = document.getElementById('current');
    setTimeout(function () {
      currentSong.play();
    }, 75);
  }

  playPause(){
    var song = document.getElementById('current');
    if(!song.paused && !song.ended){
      pauseButton ? pauseButton.setAttribute('id', 'playButton') : playButton.setAttribute('id', 'pauseButton');
      song.pause();
    }
    else {
      playButton ? playButton.setAttribute('id', 'pauseButton') : pauseButton.setAttribute('id', 'playButton');
      setTimeout(function () {
        song.play();
      }, 75);
    }
  }

  render(){
      console.log(this.props.song.small_image);
        if(!this.props.song){
          return <div><h3>Loading</h3></div>;
        }
        else{
        return (
          <div id="audio-wrapper">
          <audio id="current" src={this.props.song.audio} />
          <nav id="audio-nav">
            <div id="defaultBar">
              <div id="progressBar"></div>
            </div>
              <div id="buttons">
                <button type="button" id="playButton" onClick={this.playPause.bind(this)}></button>
                <button type="button" id="muteButton"></button>
                <span id="currentTime">0:00</span>
                /<span id="fullDuration">0:00</span>
              </div>
              <div className="song-image">
              <img src={this.props.song.small_image} />
              </div>
          </nav>
          </div>
        );
        }
    }
}


const mapStateToProps = (state) => {
  return {song: state.songs.song}
}


export default connect(mapStateToProps)(MusicPlayer)
