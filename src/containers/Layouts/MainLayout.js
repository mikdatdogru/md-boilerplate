import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TopNavigation from './TopNavigation';
import { setLocale } from '../../redux/modules/locale';

import HomePage from '../../pages/Home';
import { detectLang } from '../../utils/helper';

const MainLayout = ({ dispatch }) => {
  useEffect(() => {
    const lang = detectLang();
    dispatch(setLocale(lang));
  });

  return (
    <Container>
      <TopNavigation />
      <Switch>
        <Route exact path="/" name="Home Page" component={HomePage} />
      </Switch>
    </Container>
  );
};

MainLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
MainLayout.defaultProps = {};

export default connect()(MainLayout);
