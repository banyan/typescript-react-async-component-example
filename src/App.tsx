import * as React from 'react';
import './App.css';

import AsyncProduct from './AsyncProduct';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to My App</h1>
        <AsyncProduct />
      </div>
    );
  }
}

export default App;
