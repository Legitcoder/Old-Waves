import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicPlayer extends Component{

  constructor(props){
    super(props);
    this.state = {
      volume: "100"
    }
  }


  componentWillUpdate(){
    var currentSong = document.getElementById('current');
    setTimeout(function () {
      currentSong.play();
    }, 75);
  }

  convertedCurrentTime(){
    var song = document.getElementById('current');
    var playedMinutes = parseInt(song.currentTime/60);
    var playedSeconds = parseInt(song.currentTime%60);
    playedSeconds < 10 ? playedSeconds = `0${playedSeconds}` : '';
    return `${playedMinutes}:${playedSeconds}`;
  }

  update(){
    var song = document.getElementById('current');
    var progressBar = document.getElementById('progressBar');
    var pauseButton = document.getElementById('pauseButton');
    var currentTime = document.getElementById('currentTime');
    if(song && !song.ended){
       currentTime.innerHTML = this.convertedCurrentTime();
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

  setVolume(event){
    var song = document.getElementById('current');
    var mute = document.getElementById('muteButton');
    var playButton = document.getElementById('playButton');
    var volumeSlider = document.getElementById('volumeSlider');
    song.volume = volumeSlider.value/100;
    this.setState({volume: volumeSlider.value});
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

  clickedBar(event){
    var song = document.getElementById('current');
    var bar = document.getElementById('defaultBar');
    var progressBar = document.getElementById('progressBar');
    var currentTime = document.getElementById('currentTime');
    if(!song.ended){
      var mouseX = event.pageX - bar.offsetLeft;
      var newTime = (mouseX*song.duration)/bar.offsetWidth;
      song.currentTime = newTime;
      currentTime.innerHTML = this.convertedCurrentTime();
      progressBar.style.width = mouseX + "px";
    }
  }

  renderImage(image){
    if(image !== ""){
      return <img className="song-image" src={image} />
    }
    else{
      return <div></div>
    }
  }



  renderMusicPlayer(audio, image, duration, songTitle, artistName){
    return (
      <div id="audio-wrapper">
      <audio id="current" src={audio} />
      <nav id="audio-nav">
      <ul id="controlButtons">
        <li id="controlButton"><button type="button" id="leftButton"></button></li>
        <li id="controlButton"><button type="button" id="playButton" onClick={this.playPause.bind(this)}></button></li>
        <li id="controlButton"><button type="button" id="rightButton"></button></li>
      </ul>
        <div id="defaultBar" onClick={this.clickedBar.bind(this)}>
          <div id="progressBar"></div>
          <span id="currentTime">0:00</span>
          <span id="fullDuration">{duration}</span>
        </div>
          <div className="song-container">
            {this.renderImage(image)};
            <span className="song-title">{songTitle}</span>
            <span className="song-artist">{artistName}</span>
          </div>
          <div id="volumeAndMuteControls">
            <button type="button" id="muteButton" onClick={this.muteOrUnmute.bind(this)}></button>
            <input id="volumeSlider" type="range" min="0" max="100" value={this.state.volume} step="1" onChange={this.setVolume.bind(this)} />
          </div>
      </nav>
      </div>
    );
  }

  render(){
        const {song} = this.props;
        if(!song){
          return this.renderMusicPlayer("", "", "0:00", "", "");
        }
        else{
          return this.renderMusicPlayer(song.audio, song.small_image, song.length, song.title, song.artist.name);
        }
    }
}


const mapStateToProps = (state) => {
  return {song: state.songs.song}
}


export default connect(mapStateToProps)(MusicPlayer)
