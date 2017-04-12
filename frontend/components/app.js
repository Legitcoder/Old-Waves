import React, { Component } from 'react';
import MusicPlayer from './main/musicPlayer';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      <div>
        <MusicPlayer />
      </div>
      </div>
    );
  }
}
