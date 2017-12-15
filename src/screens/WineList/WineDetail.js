import React from 'react';
import { View, Text } from 'react-native';

const WineDetail = ({ detailCategory, detail }) => {

  const formatArray = (detail) => {
    let res = '';
    if (typeof detail !== 'string' && typeof detail !== 'number') {
      detail.forEach(e => {
        res += `${e + '\n'}`;
      });
      return res;
    } else {
      return detail;
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.detailCategoryWrapper} >
        <Text style={[styles.detailCategory, styles.text]}>
          {detailCategory}:
        </Text>
      </View>

      <View style={styles.detailWrapper} >
        <Text style={[styles.detail, styles.text]}>
          {formatArray(detail)}
        </Text>
      </View>

    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
  },
  detailWrapper: {
    flex: 3,
    paddingVertical: 5,
    paddingHorizontal: 4,
    marginVertical: 10,
  },
  detailCategoryWrapper: {
    flex: 2,
    paddingVertical: 5,
    paddingHorizontal: 4,
    marginVertical: 10,
  },
  text: {
    lineHeight: 25,
    fontSize: 18,
  },
  detailCategory: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
  detail: {
    textAlign: 'left',
  },
};

export default WineDetail;
