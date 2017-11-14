import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import WineList from './WineList';
import WineButton from './WineButton';

class WineListScreen extends Component <{}> {

  static navigatorStyle = {
    navBarTranslucent: true,
    navBarTitleTextCentered: true,
  };

  buildData = (arrayOfArrays) => {
    const data = [];
    // arrayOfArrays.forEach((element) => console.log(element));
    arrayOfArrays.forEach(element => {
      data.push({ wine: element });
    });
    return data;
  }

  _keyExtractor = (item) => item[0];

  render() {
    // console.log('WineList', Object.entries(WineList));
    console.log(this.buildData(Object.entries(WineList)));
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <FlatList
          data={Object.entries(WineList)}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <WineButton>{item[0]}</WineButton>}
        />
      </View>
    );
  }
}

export default WineListScreen;
