import React, { Component } from 'react';
import { View, FlatList, Platform } from 'react-native';
import WineList from './WineList';
import WineButton from './WineButton';

class WineListScreen extends Component <{}> {
  static navigatorStyle = {
    navBarTitleTextCentered: true,
    drawUnderNavBar: Platform.OS !== 'ios',
    tabBarHidden: true,
  };

  static navigatorButtons = {
    rightButtons: [],
    leftButtons: [{
      id: 'cancel',
      buttonColor: 'red',
    }],
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      this.props.navigator.switchToTab({
        tabIndex: 0,
      });
    }
  }

  _keyExtractor = (item) => item[0];

  onPress = () => {
    this.props.navigator.push({ // eslint-disable-line
      screen: 'handyDandy.PushedScreen',
      title: 'Entry Creation',
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={Object.entries(WineList)}
          keyExtractor={this._keyExtractor}
          style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : 56 }}
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