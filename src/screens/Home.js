import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import axios from 'axios';

import colors from '../data/colors';
import { CommitItem, Separator } from '../components/Commit';
import { data } from '../data/data';

const API_URI = 'https://api.github.com/repos/diskonekted/mobile-GitHub-API/commits';

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      commits: data,
      refresh: false,
    }
  }

  componentDidMount() {
  
  }

  fetchAPI = async () => {

  }

  handleRefresh = () => {

  }

  render() {
    return(
            <FlatList 
              style={styles.flatList}
              data={this.state.commits}
              style={styles.flatList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <CommitItem
                  author={item.commit.author.name}
                  hash={item.sha}
                  message={item.commit.message}
                />
              )}
              ItemSeparatorComponent={Separator}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refresh}
                  onRefresh={this.handleRefresh}
                  progressBackgroundColor={styles.whiteBg} // android
                  colors={[colors.blue]} // android
                  tintColor={styles.blueBg} // ios
                />
              }
            />
        );
  }
}

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: colors.blue,
  },
  whiteBg: {
    color: colors.white,
  },
  blueBg: {
    color: colors.blue,
  },
});

export default Home;
