import React from 'react'
import { View, Text } from 'react-native';

const WineDetail = ({ detailCategory, detail }) => {

  const formatArray = (detail) => {
    console.log(detail);
    let res = '';
    if (typeof detail !== 'string') {
      alert('hit');
      detail.forEach(e => {
        res += `${e + '\n'}`
      });
      return res;
    } else {
      return detail;
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.detailWrapper} >
        <Text style={styles.detailCategory}>
          {detailCategory}:
        </Text>
      </View>

      <View style={styles.detailWrapper} >
        <Text style={styles.detail}>
          {formatArray(detail)}
        </Text>
      </View>

    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
  },
  detailWrapper: {
    flex: 1,
    paddingHorizontal: 2,
  },
  detailCategory: {
    textAlign: 'right',
  },
  detail: {
    textAlign: 'left',
  },
}

export default WineDetail;
