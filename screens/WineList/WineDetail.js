import React from 'react'
import { View, Text } from 'react-native';

const WineDetail = ({ detailCategory, detail }) => {

  const formatArray = (detail) => {
    let res = '';
    if (typeof detail !== 'string') {
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
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  detailWrapper: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 2,
    marginVertical: 10,
  },
  detailCategory: {
    textAlign: 'right',
    fontWeight: 'bold',
    // fontSize: 20,
  },
  detail: {
    textAlign: 'left',
  },
}

export default WineDetail;
