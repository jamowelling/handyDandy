import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  AsyncStorage,
  FlatList
} from 'react-native';
import ActionButton from 'react-native-action-button';
import ListEntry from './ListEntry';


export default class HandyDandyScreen extends Component<{}> {
  state = {
    entries: [],
  }
  static navigatorStyle = {
    navBarTitleTextCentered: true,
  };

  componentDidMount() {
    this._retrieveEntries();
  }

  async _retrieveEntries() {
    let entries;
    try {
        await AsyncStorage.getItem('handyDandyEntries', (err, res) => {
        entries = res;
        if (entries) {
          entries = JSON.parse(entries);
          // console.log('entries', entries);
          this.setState({ entries });
        }
      });
    } catch (error) {
      // console.log('error: ', error);
    }
  }

  _saveEntry = async (newEntry) => {
    let updatedEntries = [newEntry, ...this.state.entries];
    try {
      updatedEntries = JSON.stringify(updatedEntries);
      await AsyncStorage.setItem('handyDandyEntries', updatedEntries, () => {
      })
      .then(() => {
        this._retrieveEntries();
      })
      .then(() => {
        this.props.navigator.pop();
      });
    } catch (error) {
      // console.log('error: ', error);
    }
  }

  _removeEntry = async (entryToRemove) => {
    let updatedEntries = this.state.entries.filter(e => e !== entryToRemove);
    try {
      updatedEntries = JSON.stringify(updatedEntries);
      await AsyncStorage.setItem('handyDandyEntries', updatedEntries, () => {
      })
      .then(() => {
        this._retrieveEntries();
      });
    } catch (error) {
      // console.log('error: ', error);
    }

  }

  onFabPress = () => {
    this.props.navigator.push({
      screen: 'handyDandy.EntryCreationScreen',
      title: 'New Entry',
      passProps: {
        _saveEntry: this._saveEntry,
      }
    });
  };

  onLongPress = (entry) => {
    Alert.alert(
      'Delete Entry',
      'Delete this entry?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', onPress: () => this._removeEntry(entry)},
      ],
    )
  }

  renderListItem = ({ item }) => {
    return (
      <ListEntry
        id={item.date}
        title={item.title}
        entry={item}
        onPress={() => this.props.navigator.push({ // eslint-disable-line
          screen: 'handyDandy.EntryDisplayScreen',
          title: item.title,
          passProps: {
            entry: item,
          },
        })}
        onLongPress={this.onLongPress}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.entries}
          keyExtractor={item => item.date}
          renderItem={this.renderListItem}
        />
        <ActionButton buttonColor='rgba(12,220,220,1)' onPress={this.onFabPress} />
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
