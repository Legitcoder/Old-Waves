import React, {Component} from 'react';
import {connect} from 'react-redux';

class MusicPlayer extends Component{

  componentWillUpdate(){
    var currentSong = document.getElementById('current');
    setTimeout(function () {
      currentSong.play();
    }, 100);
  }

  render(){
        if(!this.props.song){
          return <div><h3>Loading</h3></div>;
        }
        else{
        return (
          <div >
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
