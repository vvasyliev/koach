import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import React, { Component } from 'react';
import { Router } from '@reach/router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './index.styl';

import 'normalize.css';

dayjs.extend(relativeTime); // retreive fromNow() method

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Home path="/" />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
