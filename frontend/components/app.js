import React, { Component } from 'react';
import MusicPlayer from './main/musicPlayer';
import NavBar from './main/navBar';

export default class App extends Component {
  render() {
    return (
    <div className="container-fluid">
        <NavBar />
      <div className="row">
        <div className="col-md-8 col-centered">
          {this.props.children}
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 col-centered player">
          <MusicPlayer />
        </div>
      </div>
    </div>
    );
  }
}
