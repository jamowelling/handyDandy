import React, { Component } from 'react';
import {
  View,
  TextInput,
  // AsyncStorage
} from 'react-native';

class EntryCreationScreen extends Component <{}> {
  state = {
    titleText: '',
    bodyText: '',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 , borderWidth: 1, borderColor: 'blue' }}>
          <TextInput
            onChangeText={titleText => this.setState({ titleText })}
            value={this.state.titleText}
            defaultValue={Date().toLocaleString('en-US')}
            placeholder={Date().toLocaleString('en-US', { hour12: true })}
          />
        </View>
        <View style={{ flex: 5, borderWidth: 1, borderColor: 'red' }}>
          <TextInput
            onChangeText={bodyText => this.setState({ bodyText })}
            value={this.state.bodyText}
            placeholder='Placeholder'
            autoFocus
            multiline
          />
        </View>
      </View>
    );
  }
}

export default EntryCreationScreen;
