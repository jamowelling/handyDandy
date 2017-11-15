import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import WineDetail from './WineDetail';

class WineDetailScreen extends Component <{}> {

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
      techSheet
    } = this.props.info

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <WineDetail detailCategory='Varietal' detail={varietal} />
        <WineDetail detailCategory='Grapes' detail={grapes} />
        <WineDetail detailCategory='Vintage' detail={vintage} />
        <WineDetail detailCategory='Appellation' detail={appellation} />
        <WineDetail detailCategory='Tasting Notes' detail={tastingNotes} />
        <TouchableOpacity onPress={() => this.props.navigator.push({
          screen: 'handyDandy.TechSheet',
          passProps: {
            source: techSheet
          }
        })}>
          <Text>Tech Sheet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WineDetailScreen;
