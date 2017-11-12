import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import WineList from './WineList';

class WineListScreen extends Component <{}> {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(Object.entries(WineList)),
    };
  }
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarTitleTextCentered: true,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <Text>{rowData[0]}</Text>}
        />
      </View>
    );
  }
}

export default WineListScreen;
