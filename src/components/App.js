import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Fragment>
            <Nav />
          </Fragment>
        </div>
      </Router>
    );
  }
}

export default App;
