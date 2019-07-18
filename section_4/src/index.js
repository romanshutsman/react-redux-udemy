import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

  renderContent() {
    if (this.state.lat && this.state.lon) {
      return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />;
    }
    if (this.state.err) {
      return <div>{this.state.err}</div>;
    }
    return <Spinner message={'Please accept location request'} />;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
