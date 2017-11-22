import React, { Component } from 'react';
import {
  View,
  TextInput,
  Dimensions,
  // AsyncStorage
} from 'react-native';

class EntryCreationScreen extends Component <{}> {
  state = {
    titleText: Date().toLocaleString('en-US'),
    bodyText: 'Placeholder',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flex: 2 }}>
          <TextInput
            onChangeText={titleText => this.setState({ titleText })}
            value={this.state.titleText}
          />
        </View>
        <View style={{ flex: 5, width: Dimensions.get('window').width }}>
          <TextInput
            onChangeText={bodyText => this.setState({ bodyText })}
            value={this.state.bodyText}
            style={{ flex: 1, textAlign: 'center' }}
          />
        </View>
      </View>
    );
  }
}

export default EntryCreationScreen;
