import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntryCreationBody from './EntryCreationBody';
import EntryCreationTitle from './EntryCreationTitle';

class EntryCreationScreen extends Component <{}> {
  state = {
    id: '',
    titleText: '',
    bodyText: '',
  };

  componentDidMount() {
    this.setState({ titleText: this.props.entry.title });
    this.setState({ bodyText: this.props.entry.body });
    this.setState({ id: this.props.entry.id });
  }

  updateBodyText = bodyText => {
    this.setState({ bodyText });
  }

  updateTitleText = titleText => {
    this.setState({ titleText });
  }

  FabPress = () => {
    // Time in format: MM/DD/YYYY HH:MM:SS AM/PM 12 hr format
    let date =`${new Date().toLocaleDateString('en-US')} ${new Date().toLocaleTimeString('en-US')}`;
    let id = this.state.id ? this.state.id : date;
    let title = this.state.titleText;
    let body = this.state.bodyText;
    let tags = body.match(/\B#\w\w+/g);

    if (title === '') {
      if (this.state.bodyText === '') {
        this.props.navigator.pop();
        return;
      }
      title = date;
    }
    let newEntry = {
      id,
      date,
      title,
      body,
      tags,
    };

    // end with:
    this.props._saveEntry(newEntry);
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
