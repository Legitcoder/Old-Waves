import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicPlayer extends Component{

  componentWillUpdate(){
    debugger
    var currentSong = document.getElementById('current');
    setTimeout(function () {
      currentSong.play();
    }, 100);
  }


  // changeCurrentSong(event){
  //   debugger;
  //   var currentSong = document.getElementById('current');
  //   currentSong.play();
  //   // document.getElementById('src').src = this.props.song.audio;
  //   // document.getElementById('ad').load();
  //
  // }

  render(){
        if(!this.props.song){
          return <div><h3>Loading</h3></div>;
        }
        else{
        return (
          <div>
          <h3>{this.props.song.title}</h3>
          <h3>{this.props.song.audio}</h3>
          <audio controls id="current" src={this.props.song.audio} />
          </div>
        );
        }
    }
}


const mapStateToProps = (state) => {
  return {song: state.songs.song}
}


export default connect(mapStateToProps)(MusicPlayer)
