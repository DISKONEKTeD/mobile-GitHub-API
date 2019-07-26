import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
} from 'react-native';

import { data } from '../data';

const API_URI = 'https://api.github.com/repos/diskonekted/mobile-GitHub-API/commits';

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      commits: data,
    }
  }

  handleFetchAPI = async () => {

  }

  render() {
    return(
            <FlatList 
              style={styles.flatList}
              data={this.state.commits}
              style={styles.flatList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View><Text style={styles.text}>{item.sha}</Text></View>
              )}
            />
        );
  }
}
const styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#22559e',
  },
  text: {
    color: 'black',
  }
});

export default Home;
