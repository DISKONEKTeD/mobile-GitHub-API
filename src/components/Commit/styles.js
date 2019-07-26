import { StyleSheet } from 'react-native';
import colors from '../../data/colors';

export default StyleSheet.create({
  commit: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 30,
  },
  info: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  infoMessage: {
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: colors.black,
    opacity: 0.5,
    flex: 1,
    height: 2,
    // marginHorizontal: 12,
  },
});