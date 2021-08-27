import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat-list';
import Marker from './marker';
import flats from '../../data/flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    const { selectedFlat } = this.state;
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} selectFlat={this.selectFlat} selectedFlat={selectedFlat} />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
