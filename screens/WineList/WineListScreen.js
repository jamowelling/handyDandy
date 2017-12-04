import React, { Component } from 'react';
import { View, FlatList, Platform, BackHandler } from 'react-native';
import WineList from './WineList';
import WineButton from './WineButton';

class WineListScreen extends Component <{}> {
  constructor(props) {
    super(props);
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigator.switchToTab({
        tabIndex: 0,
      });
      return true;
    });
  }


  static navigatorStyle = {
    navBarTitleTextCentered: true,
    tabBarHidden: true,
    drawUnderNavBar: true,
  };

  state = {
    offset: 0,
  };

  _keyExtractor = (item) => item[0];

  onPress = (name, info) => {
    this.props.navigator.push({
      screen: 'handyDandy.WineDetailScreen',
      title: name,
      passProps: {
        info,
      },
    });
  };

  updateOffset = (offset) => {
    this.setState({ offset });
  }

  toggleTabBar = (direction) => {
    if (direction === 'down') {
      this.props.navigator.toggleTabs({
        to: 'hidden',
        animated: true,
      });
    } else {
      this.props.navigator.toggleTabs({
        to: 'shown',
        animated: true,
      });
    }
  }

  onScroll(event) {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = (currentOffset > this.offset) &&
                      (currentOffset > 0 && this.offset > 0) ?
                      'down' : 'up';
    this.updateOffset(currentOffset);
    this.toggleTabBar(direction);
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : 54 }}>
        <FlatList
          data={Object.entries(WineList)}
          keyExtractor={this._keyExtractor}
          style={{ flex: 1 }}
          updateOffset={this.updateOffset}
          offset={this.state.offset}
          toggleTabBar={this.toggleTabBar}
          onScroll={this.onScroll}
          renderItem={({ item }) => {
              return (
                <WineButton
                  info={item[1]}
                  id={item[0]}
                  onPress={() => this.onPress(item[0], item[1])}
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
