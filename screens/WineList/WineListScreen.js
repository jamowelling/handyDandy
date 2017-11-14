import React, { Component } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import WineList from './WineList';
import WineButton from './WineButton';

class WineListScreen extends Component <{}> {

  static navigatorStyle = {
    navBarTranslucent: true,
    navBarTitleTextCentered: true,
  };

  _keyExtractor = (item) => item[0];

  render() {
    return (
      <View style={{ flex: 1, maxHeight: (Dimensions.get('window').height - 135) }}>
        <FlatList
          data={Object.entries(WineList)}
          keyExtractor={this._keyExtractor}
          style={{ height: 900 }}
          renderItem={({item}) => {
              return (
                <WineButton
                  info={item[1]}
                  id={item[0]}
                  onPress={() => alert('pressed')}
                >
                  {item[0]}
                </WineButton>
              );
            }
          }
        />
      </View>
    );
  }
}

export default WineListScreen;
