import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const CommitItem = ({
  author,
  hash,
  message,
}) => (
  <View style={styles.commit}>
    <Text style={styles.header}>{author}</Text>
    <Text style={styles.info}>{hash}</Text>
    <Text style={styles.info}>{message}</Text>
  </View>
);

CommitItem.propTypes = {
  author: PropTypes.string,
  hash: PropTypes.string,
  message: PropTypes.string,
};

export default CommitItem;
