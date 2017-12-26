import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TopNavigation from '../Layouts/TopNavigation';
import { Container } from 'semantic-ui-react';

import { store } from '../../index';
import { setLocale } from '../../actions/common';

import HomePage from '../../containers/Pages/Home';
import Forms from '../../containers/Pages/Forms';
import { localStorageData } from '../../utils/helper';

class MainLayout extends Component {
  componentWillMount() {
    const language =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

    localStorageData
      .get('language')
      .then(res => store.dispatch(setLocale(res.data)))
      .catch(() => store.dispatch(setLocale(languageWithoutRegionCode)));
  }

  render() {
    return (
      <Container>
        <TopNavigation />

        <Switch>
          <Route path="/homepage" name="Home Page" component={HomePage} />
          <Route path="/forms" name="Test Page" component={Forms} />
          <Redirect from="/" to="/homepage" />
        </Switch>
      </Container>
    );
  }
}

export default MainLayout;
