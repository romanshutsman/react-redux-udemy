import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lon: null,
      err: ''
    };
  }

  componentDidMount() {
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
      <SeasonDisplay
        lat={this.state.lat}
        lon={this.state.lon}
       />
    ) : (
      <div>{this.state.err}</div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
