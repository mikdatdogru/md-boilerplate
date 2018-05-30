import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TopNavigation from '../Layouts/TopNavigation';

import { store } from '../../index';
import { setLocale } from '../../actions/common';

import HomePage from '../../pages/Home';
import { detectLang } from '../../utils/helper';

class MainLayout extends Component {

  componentWillMount() {

    const lang = detectLang();

    store.dispatch(setLocale(lang));
  }

  render() {
    return (
      <Container>
        <TopNavigation />
        <Switch>
          <Route path="/homepage" name="Home Page" component={HomePage} />
          <Redirect from="/" to="/homepage" />
        </Switch>
      </Container>
    );
  }
}

export default MainLayout;
