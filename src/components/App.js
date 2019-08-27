import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'></div>
      </Router>
    );
  }
}

const ContentGrid = ({children}) => (
  <Grid padded='vertically' columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{maxWidth: 550}}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

export default connect(
  null,
  {handleInitialData}
)(App);
