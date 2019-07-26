import React from 'react';
import { PropTypes } from 'prop-types';

import { View } from 'react-native';

import styles from './styles';

const Separator = ({ style }) => <View style={[styles.separator, style]} />;

Separator.propTypes = {
  style: PropTypes.object,
};

export default Separator;