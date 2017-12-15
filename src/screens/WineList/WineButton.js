import React from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';

const WineButton = ({ children, onPress, info }) => {
  const determineStyle = () => {
    switch (info.type) {
      case 'red':
        return styles.red;
      case 'rose':
        return styles.rose;
      case 'bubbly':
        return styles.bubbly;
      case 'white':
      default:
        return styles.white;
    }
  };

  return (
      <TouchableOpacity style={[styles.container, determineStyle() ]} onPress={onPress}>
        <View style={styles.nameWrapper}>
          <Text style={styles.nameStyle}>{children}</Text>
        </View>
        <View style={styles.varietalWrapper}>
          <Text style={styles.varietalStyle}>{info.varietal}</Text>
        </View>
      </TouchableOpacity>
  );
};

const styles = {
  container: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: '#666',
    paddingLeft: 40,
    paddingVertical: 11,
    marginBottom: 1,
    flexDirection: 'row',
  },
  nameWrapper: {
    flex: 1,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  varietalWrapper: {
    flex: 1,
  },
  varietalStyle: {
    fontSize: 16,
  },
  bubbly: {
    backgroundColor: '#f2f2ee',
  },
  red: {
    backgroundColor: '#c94966',
  },
  white: {
    backgroundColor: '#f0f0d9',
  },
  rose: {
    backgroundColor: '#f0c0c0',
  },
};

export default WineButton;
