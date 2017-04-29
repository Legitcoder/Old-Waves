import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicPlayer extends Component{

  constructor(props){
    super(props);
    this.state = {
      duration: "0:00"
    }
  }

  componentWillUpdate(){
    var currentSong = document.getElementById('current');
    setTimeout(function () {
      currentSong.play();
    }, 75);
  }

  update(){
    var song = document.getElementById('current');
    var currentTime = document.getElementById('currentTime');
    var playedMinutes = parseInt(song.currentTime/60);
    var playedSeconds = parseInt(song.currentTime%60);
    playedSeconds < 10 ? playedSeconds = `0${playedSeconds}` : '';
    song && !song.ended && !song.paused  ? this.setState({duration: `${playedMinutes}:${playedSeconds}`}) : currentTime = "0:00";
  }

  playPause(){
    var song = document.getElementById('current');
    if(!song.paused && !song.ended){
      pauseButton ? pauseButton.setAttribute('id', 'playButton') : playButton.setAttribute('id', 'pauseButton');
      song.pause();
      window.clearInterval(window.updateTime);
    }
    else {
      playButton ? playButton.setAttribute('id', 'pauseButton') : pauseButton.setAttribute('id', 'playButton');
      setTimeout(function () {
        song.play();
      }, 75);
       window.updateTime = setInterval(this.update.bind(this), 500);
    }
  }

  muteOrUnmute(){
    var song = document.getElementById('current');
    var mute = document.getElementById('muteButton');
    var unMute = document.getElementById('unMuteButton');
    if(song.muted === true){
      song.muted = false;
      mute ? mute.setAttribute('id', 'unMuteButton') : unMute.setAttribute('id', 'muteButton');
    }
    else{
      song.muted = true;
      mute ? mute.setAttribute('id', 'unMuteButton') : unMute.setAttribute('id', 'muteButton');
    }
  }

  renderMusicPlayer(audio, image, duration){
    return (
      <div id="audio-wrapper">
      <audio id="current" src={audio} />
      <nav id="audio-nav">
        <div id="defaultBar">
          <div id="progressBar"></div>
        </div>
          <div id="buttons">
            <button type="button" id="playButton" onClick={this.playPause.bind(this)}></button>
            <button type="button" id="muteButton" onClick={this.muteOrUnmute.bind(this)}></button>
            <span id="currentTime">{this.state.duration}/</span><span id="fullDuration">{duration}</span>
          </div>
          <div className="song-image">
            <img src={image} />
          </div>
      </nav>
      </div>
    );
  }

  render(){
        const {song} = this.props;
        //var updateTime = setInterval(this.update(), 500);
        if(!song){
          return this.renderMusicPlayer("", "", "0:00");
        }
        else{
          return this.renderMusicPlayer(song.audio, song.small_image, song.length);
        }
    }
}


const mapStateToProps = (state) => {
  return {song: state.songs.song}
}


export default connect(mapStateToProps)(MusicPlayer)
