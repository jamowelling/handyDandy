import React, { Component } from 'react';
import { View } from 'react-native';
import EntryCreationBody from '../HandyDandy/EntryCreationBody';
import EntryCreationTitle from '../HandyDandy/EntryCreationBody';

class EntryDisplayScreen extends Component <{}> {

  state = {
    titleText: '',
    bodyText: '',
  }

  componentDidMount() {
    this.setState({ titleText: this.props.entry.title });
    this.setState({ bodyText: this.props.entry.body });
  }

  render() {
    return (
      <View style={{ flex: 1, margin: 15, }}>
        <EntryCreationTitle
          onChangeText={this.updateTitleText}
          value={this.state.titleText}
        />
        <EntryCreationBody
          onChangeText={this.updateBodyText}
          value={this.state.bodyText}
        />
      </View>
    );
  }
}

export default EntryDisplayScreen;
