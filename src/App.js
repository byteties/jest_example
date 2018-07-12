import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.initMap()
  }

  async initMap(){
    const mapmagic = require('mapmagic-gl')
    const map =  await new mapmagic.Map({
      container: 'map',
      app_id: 'cleanfood-map-6vpir',
      api_key: 'NmQ4MmUzNDU0NDJjZjc3N2U0NzU0OWE5MjYwYjhiMWE',
    })
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <script src='https://libs.mapmagic.co.th/mapmagic-gl/1.1.1/js/mapmagic-gl.js'></script>
          <link href='https://libs.mapmagic.co.th/mapmagic-gl/1.1.1/css/mapmagic-gl.css' rel='stylesheet' />
        </header>
        <div id="map" className="map-init"/>
      </div>
    );
  }
}

export default App;
