import React, { Component } from 'react';
import Container from './Container'
import BannerTop from './BannerTop'


class App extends Component {
  render() {
    return (
      <div>
        <BannerTop/>
        <Container/>
      </div>
    );
  }
}

export default App;
