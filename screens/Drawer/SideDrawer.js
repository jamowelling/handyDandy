import React, { Component } from 'react';
import { View, TextInput, Dimensions } from 'react-native';

class SideDrawer extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>

          <View style={styles.searchWrapper}>
            <TextInput
              placeholder='Search entries'
              underlineColorAndroid='rgba(0,0,0,0)'
              style={styles.textInputStyle}
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
  }
}

export default SideDrawer;
