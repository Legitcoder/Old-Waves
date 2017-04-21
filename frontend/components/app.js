import React, { Component } from 'react';
import MusicPlayer from './main/musicPlayer';
import NavBar from './main/navBar';
import SearchBar from './main/searchBar';

export default class App extends Component {
  render() {
    return (
    <div className="container-fluid">
        <NavBar />
    <div className="row">
      <div className="col-md-12 col-centered">
        <SearchBar />
      </div>
    </div>
          {this.props.children}
      <div className="row player">
        <div className="col-md-10 col-centered">
          <MusicPlayer />
        </div>
      </div>
    </div>
    );
  }
}
