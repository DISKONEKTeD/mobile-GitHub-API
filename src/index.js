import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './screens/Home';

export default () => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  </Fragment>
);
