import React, { Component } from 'react';
import {
  View,
  // AsyncStorage
} from 'react-native';
import EntryCreationBody from './EntryCreationBody';
import EntryCreationTitle from './EntryCreationTitle';

class EntryCreationScreen extends Component <{}> {
  state = {
    titleText: '',
    bodyText: '',
  };

  updateBodyText = bodyText => {
    this.setState({ bodyText });
  }

  updateTitleText = titleText => {
    this.setState({ titleText });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <EntryCreationTitle
            onChangeText={this.updateTitleText}
            value={this.state.titleText}
            defaultValue={Date().toLocaleString('en-US')}
            placeholder={Date().toLocaleString('en-US', { hour12: true })}
          />
        </View>
        <View>
          <EntryCreationBody
            onChangeText={this.updateBodyText}
            value={this.state.bodyText}
          />
        </View>
      </View>
    );
  }
}

export default EntryCreationScreen;
