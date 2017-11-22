import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EntryCreationScreen extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>New Entry</Text>
      </View>
    );
  }
}

export default EntryCreationScreen;
