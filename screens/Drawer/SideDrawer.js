import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';

class SideDrawer extends Component <{}> {
  state = {
    data: [
      { id: 'Entry 1' },
      { id: 'Entry 2' },
      { id: 'Entry 3' },
      { id: 'Entry 4' },
      { id: 'Entry 5' },
      { id: 'Entry 6' }
    ],
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>

          <View style={{ flex: 1 }}>
            <View style={styles.searchWrapper}>
              <TextInput
                placeholder='Search entries'
                underlineColorAndroid='rgba(0,0,0,0)'
                style={styles.textInputStyle}
              />
            </View>
          </View>

          <View style={styles.listWrapper}>
            <FlatList
              style={{ flex: 1 }}
              data={this.state.data}
              keyExtractor={ item => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.resultStyle}>
                    <Text>{item.id}</Text>
                  </View>
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
  searchWrapper: {
    backgroundColor: '#fff',
    borderRadius: 25,
    margin: 6,
    marginTop: 50,
    borderWidth: 1.5,
    borderColor: '#ccc',
  },
  textInputStyle: {
    marginLeft: 6,
    fontSize: 18,
  },
  listWrapper: {
    flex: 1,
  },
  resultStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,

  }
}

export default SideDrawer;
