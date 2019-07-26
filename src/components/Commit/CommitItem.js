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
    <Text style={[styles.header, styles.bold]}>{author}</Text>
    <Text style={styles.info}><Text style={styles.bold}>Commit: </Text>{hash}</Text>
    <Text style={[styles.infoMessage, styles.bold]}>{message}</Text>
  </View>
);

CommitItem.propTypes = {
  author: PropTypes.string,
  hash: PropTypes.string,
  message: PropTypes.string,
};

export default CommitItem;
