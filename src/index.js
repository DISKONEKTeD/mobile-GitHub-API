import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Home from './screens/Home';

export default () => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  </Fragment>
);
