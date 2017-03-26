import React, { Component } from 'react';

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div><h2>This is where the app starts after login</h2></div>
    );
  }
}
