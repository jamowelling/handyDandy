import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ActionButton from 'react-native-action-button';


export default class HandyDandyScreen extends Component<{}> {
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarTitleTextCentered: true,
  };
  onPress = () => {
    alert('hi!');
    this.props.navigator.push({ // eslint-disable-line
      screen: 'handyDandy.PushedScreen',
      title: 'Entry Creation',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text>Handy Dandy!</Text>
        </View>
        <ActionButton buttonColor='rgba(12,220,220,1)' onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
