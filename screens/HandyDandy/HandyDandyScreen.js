import React, { Component } from 'react';
import {
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
          this.setState({ entries });
        }
      });
    } catch (error) {
      // console.log('error: ', error);
    }
  }

  _saveEntry = async (newEntry) => {
    let updatedEntries = [
      newEntry,
      ...this.state.entries.filter(entry => entry.id !== newEntry.id)
    ];

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

  onPress = ({ item } = { item: { title: '', body: '' } }) => {
    this.props.navigator.push({
      screen: 'handyDandy.EntryCreationScreen',
      title: item.title ? item.title : 'New Entry',
      passProps: {
        _saveEntry: this._saveEntry,
        entry: item,
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
        onPress={() => this.props.navigator.push({
          screen: 'handyDandy.EntryCreationScreen',
          title: item.title,
          passProps: {
            _saveEntry: this._saveEntry,
            entry: item,
          },
        })}
        onLongPress={this.onLongPress}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.entries}
          keyExtractor={item => item.date}
          renderItem={this.renderListItem}
        />
        <ActionButton buttonColor='rgba(12,220,220,1)' onPress={this.onPress} />
      </View>
    );
  }
}
