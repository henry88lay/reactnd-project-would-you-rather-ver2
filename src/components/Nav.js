import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  Menu,
  Responsive,
  Image,
  Grid,
  Button,
  Container
} from 'semantic-ui-react';

export default class Nav extends Component {
  render() {
    return <div>
    <Container>
      <Responsive as{Menu} minWidth={651} pointing secondary>
        <Menu.Item name='home' as={NavLink} to="/" exact />
        <Menu.Item name='new poll' as={NavLink} to="/add"  />
        <Menu.Item name='leader board' as={NavLink} to="/leaderboard"  />
        <Menu.Menu position="right" />
          <Main.Item>
            <span>
              <
            </span>
          </Main.Item>
      </Responsive>
    </Container>
    </div>;
  }
}
