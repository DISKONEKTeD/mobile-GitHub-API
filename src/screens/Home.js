import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  View,
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
      loading: false,
      page: 1,
      per_page: 4,
      end: false,
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })
    // this.fetchAPI()
  }

  fetchAPI = async () => {
    let url = API_URI + `?page=${this.state.page}&per_page=${this.state.per_page}`
    const { data: commits } = await axios.get(url);
    if(commits && commits.length && commits.length > 0){
      this.setState({
        commits: [...this.state.commits, ...commits],
        loading: false,
        page: this.state.page + 1,
      })
    } else {
      this.setState({
        loading: false,
        end: true,
      })
    }
  }

  handleRefresh = () => {
    this.setState({
      refresh: true,
    });


    this.setState({
      refresh: false,
    });
  }

  handleMore = () => {
    if(this.state.loading === false && this.state.end === false){
      this.fetchAPI()
    }
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
    backgroundColor: colors.white,
  },
  whiteBg: {
    color: colors.white,
  },
  blueBg: {
    color: colors.blue,
  },
});

export default Home;
