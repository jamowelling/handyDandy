import React, { Component } from 'react';
import {
  View,
  // AsyncStorage
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome'
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

  FabPress = () => {
    alert('pressed');
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
        <View style={{ flex: 1 }}>
          <EntryCreationBody
            onChangeText={this.updateBodyText}
            value={this.state.bodyText}
          />
        </View>
        <ActionButton
          buttonColor='rgba(12,220,220,1)'
          onPress={this.FabPress}
          icon={<Icon name='check' size={20} />}
        />
      </View>
    );
  }
}

export default EntryCreationScreen;
