import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import DigitalBusinessCard from './components/DigitalBusinessCard';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Test App! Not really ready to be hosted :p'
  }

  render() {
    return (
      <div className="app-root" display="flex" flex-direction="column" align-content="center">
        <h1>Test App! Not really ready to be hosted!</h1>
        <DigitalBusinessCard />
      </div>
    );
  }
}

export default App;
