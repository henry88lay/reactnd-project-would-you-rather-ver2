import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
import {handleInitialData} from '../actions/shared';
import {connect} from 'react-redux';
import './App.css';
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const {authUser} = this.props;
    return (
      <Router>
        <div className='App'>
        {authUser === null ? (
          <Route
        )}
          <ContentGrid>
            <p>New Start...</p>
          </ContentGrid>

        </div>
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
