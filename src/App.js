import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const styleName = [
  'almond',
  'cha-thai',
  'charcoal',
  'cloudy', 
  'hybrid',
  'lightsteel',
  'midnight',
  'satellite',
  'spearmint',
  'terrain', 
  'ivory', 
]

const timerID = []
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      count: 0
    }
    this.initMap = this.initMap.bind(this)
  }

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

    map.on('dblclick', () => {
      if (timerID.length) {
        timerID.forEach((e) => {
          clearTimeout(e)
        })
      }
    })
    map.on('click', () => {
      const { count } = this.state
      timerID.push(setTimeout(() => {
        if(count < 10){
          map.setStyle(styleName[count])
          this.setState({
            count: count +1
          })
        } else {
          map.setStyle(styleName[count])
          this.setState({
            count: 0
          })
        }
      }, 200))
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
