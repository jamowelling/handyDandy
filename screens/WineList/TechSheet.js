import React from 'react';
import {
  View
} from 'react-native';
import Pdf from 'react-native-pdf';

const TechSheet = ({ source }) => {
  return (
    <View style={{ flex: 1 }}>
      <Pdf
        source={source}
        onLoadComplete={pageCount => console.log(pageCount)}
        onPageChanged={(page, pageCount) => console.log(`current page: ${page}`)}
        onError={error => console.log(error)}
        style={{ flex: 1 }}
      />
    </View>
  );
}

export default TechSheet;
