import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EntryDisplayScreen extends Component <{}> {
  render() {
    return (
      <View>
        <Text>{this.props.entry.body}</Text>
      </View>
    );
  }
}

export default EntryDisplayScreen;
