import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CreateEntryScreen extends Component <{}> {
  render() {
    const {
      appellation,
      grapes,
      tastingNotes,
      varietal,
      vintage,
    } = this.props.info
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Text>Varietal: {varietal}</Text>
        <Text>Grapes: {grapes}</Text>
        <Text>Vintage: {vintage}</Text>
        <Text>Appellation: {appellation}</Text>
        <Text>Tasting Notes: {tastingNotes}</Text>
      </View>
    );
  }
}

export default CreateEntryScreen;
