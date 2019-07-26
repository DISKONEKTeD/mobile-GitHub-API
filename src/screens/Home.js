import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import axios from 'axios';

import colors from '../data/colors';
import { CommitItem, Separator } from '../components/Commit';

const API_URI = 'https://api.github.com/repos/diskonekted/mobile-GitHub-API/commits';

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      commits: [],
      refresh: false,
      loading: false,
      page: 1,
      per_page: 2,
      end: false,
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })
    this.fetchAPI()
  }

  /*
  * @param refresh: Whether we wish to refresh the commits array/data
  */
  fetchAPI = async (refresh) => {
    let url = API_URI + `?page=${this.state.page}&per_page=${this.state.per_page}`
    const { data: commits } = await axios.get(url);

    if(commits && commits.length && commits.length > 0){
      this.setState({
        commits: refresh ? [...commits] : [...this.state.commits, ...commits],
        loading: false,
        refresh: false,
        page: this.state.page + 1,
      })
    } else { // no new data found
      this.setState({
        loading: false,
        end: true,
      })
    }
  }

  handleRefresh = () => {
    this.setState({
      refresh: true,
      page: 1,
      end: false,
    }, async () => this.fetchAPI(true));
  }

  handleMore = () => {
    // do not fire if no new data has been found
    if(this.state.loading === false && this.state.end === false){
      this.setState({
        loading: true,
      })
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
              onEndReachedThreshold={0.7}
              onEndReached={this.handleMore}
              ListFooterComponent={
                this.state.loading && (
                  <DotIndicator
                    size={10}
                    count={5}
                    color={styles.black}
                    style={styles.indicator}
                  />
                )
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
  indicator: {
    marginTop: 25,
    marginBottom: 25,
  }
});

export default Home;
