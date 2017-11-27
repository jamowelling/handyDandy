import React, { Component } from 'react';
import {
  View,
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
    // Time in format: MM/DD/YYYY HH:MM:SS AM/PM 12 hr format
    let date =`${new Date().toLocaleDateString('en-US')} ${new Date().toLocaleTimeString('en-US')}`;
    // console.log('date', date);
    let title = this.state.titleText;
    if (title === '') {
      title = date;
    }
    let newEntry = {
      date,
      title,
      body: this.state.bodyText,
      tags: ['tag1', 'tag2'],
    };

    // end with:
    this.props._saveEntry(newEntry)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <EntryCreationTitle
          onChangeText={this.updateTitleText}
          value={this.state.titleText}
        />
        <EntryCreationBody
          onChangeText={this.updateBodyText}
          value={this.state.bodyText}
          autoFocus={true}
        />
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
