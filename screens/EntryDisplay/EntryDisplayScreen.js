import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EntryDisplayScreen extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1, margin: 15, }}>
        <Text style={{ fontSize: 20 }}>{this.props.entry.body}</Text>
      </View>
    );
  }
}

export default EntryDisplayScreen;
