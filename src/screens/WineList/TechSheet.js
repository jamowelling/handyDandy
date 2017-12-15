import React from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';

const TechSheet = ({ source }) => {
  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={source}
        // onError={error => console.log(error)}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default TechSheet;
