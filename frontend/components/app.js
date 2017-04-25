import React, { Component } from 'react';
import MusicPlayer from './main/musicPlayer';
import NavBar from './main/navBar';
import SearchBar from './main/searchBar';

export default class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <div className="custom-container">
            <div className="a">
              {this.props.children}
            </div>
                      <MusicPlayer />
          </div>
      </div>
    );
  }
}
