import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lon: null,
      err: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      err =>
        this.setState({
          err: err.message
        })
    );
  }

  render() {
    return this.state.lat && this.state.lon ? (
      <div>
        <div>Lat: {this.state.lat}</div>
        <div>Lon: {this.state.lon}</div>
      </div>
    ) : (
      <div>{this.state.err}</div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
