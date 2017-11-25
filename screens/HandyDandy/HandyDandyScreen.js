import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage
} from 'react-native';
import ActionButton from 'react-native-action-button';


export default class HandyDandyScreen extends Component<{}> {
  state = {
    entries: [],
  }
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarTitleTextCentered: true,
  };

  componentDidMount() {
    this._retrieveEntries();
  }

  async _retrieveEntries() {
    let entries;
    try {
      console.log('reached');
      console.log(await AsyncStorage.getAllKeys());
      entries = await AsyncStorage.getItem('anything', (err, res) => {
        console.log('err', err);
        console.log('res', res);
        console.log('entries', entries);
        if (entries) {
          this.setState({ entries });
        }
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  _saveEntry = async (newEntry) => {
    let updatedEntries = [...this.state.entries, newEntry];
    try {
      updatedEntries = JSON.stringify(updatedEntries);
      await AsyncStorage.setItem('handyDandyEntries', updatedEntries, () => {
      });
    } catch (error) {
      console.log('error: ', error);
    }
    // Merge item here? Or set new value for old key 'handyDandyEntries'
  }

  onPress = () => {
    this.props.navigator.push({
      screen: 'handyDandy.EntryCreationScreen',
      title: 'New Entry',
      passProps: {
        _saveEntry: this._saveEntry,
      }
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
