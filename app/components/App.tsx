import React, { Component } from 'react';
import { Router, Link } from "@reach/router"

import 'normalize.css';

export interface IAppProps {}
export interface IAppState {}

class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <Router>
        app
      </Router>
    );
  }
}

export default App;
