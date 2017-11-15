import React, { Component } from 'react';
import { View } from 'react-native';
import WineDetail from './WineList/WineDetail';

class CreateEntryScreen extends Component <{}> {

  formatGrapes = (grapes) => {
    let res = '';
    grapes.forEach(grape => {
      res += grape + '\n';
    });
    return res;
  }

  render() {
    const {
      appellation,
      grapes,
      tastingNotes,
      varietal,
      vintage,
    } = this.props.info

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <WineDetail detailCategory='Varietal' detail={varietal} />
        <WineDetail detailCategory='Grapes' detail={grapes} />
        <WineDetail detailCategory='Vintage' detail={vintage} />
        <WineDetail detailCategory='Appellation' detail={appellation} />
        <WineDetail detailCategory='Tasting Notes' detail={tastingNotes} />
      </View>
    );
  }
}

export default CreateEntryScreen;
