import React, { Component } from 'react';
import {
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

class SideDrawer extends Component <{}> {
  state = {
    searchText: '',
    data: [
      { id: 'Entry 1' },
      { id: 'Entry 2' },
      { id: 'Entry 3' },
      { id: 'Entry 4' },
      { id: 'Entry 5' },
      { id: 'Entry 6' }
    ],
  };

  onChangeText = (searchText) => {
    this.setState({ searchText });
  }

  findTag = (tag) => {
    const entries = [];
    let taggedEntries = entries.filter(entry => entry.includes(tag));
    return taggedEntries;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>

          <View style={{ flex: 1 }}>
            <SearchBar
              onChangeText={this.onChangeText}
            />
          </View>

          <View style={styles.listWrapper}>
            <FlatList
              style={{ flex: 1 }}
              data={this.state.data}
              keyExtractor={ item => item.id}
              renderItem={({ item }) => {
                return (
                  <SearchResult>
                    {item.id}
                  </SearchResult>
                );
              }}
            />
          </View>

        </View>
      </View>
    );
  }
}

const styles = {
  wrapper: {
    width: Dimensions.get('window').width * 0.66,
    height: Dimensions.get('window').height,
    backgroundColor: '#ddd',
  },
  listWrapper: {
    flex: 1,
  },
};

export default SideDrawer;
