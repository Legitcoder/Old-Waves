import React, { Component } from 'react';
import MusicPlayer from './main/musicPlayer';
import NavBar from './main/navBar';
import SearchBar from './main/searchBar';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">

          <div className="a">
            {this.props.children}
            <MusicPlayer />
          </div>
      </div>
    );
  }
}
