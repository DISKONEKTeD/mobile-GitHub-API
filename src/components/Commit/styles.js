import { StyleSheet } from 'react-native';
import colors from '../../data/colors';

export default StyleSheet.create({
  commit: {
    padding: 10,
  },
  header: {
    fontSize: 30,
  },
  info: {
    fontSize: 18,
  },
  separator: {
    backgroundColor: colors.black,
    opacity: 0.5,
    flex: 1,
    height: 1,
    marginHorizontal: 12,
  },
});