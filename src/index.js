import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './screens/Home';
import colors from './data/colors';

export default () => (
  <Fragment>
    <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  </Fragment>
);
