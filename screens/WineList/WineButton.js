import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const WineButton = ({ children, onPress }) => {
  // console.log('info', info);
  return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={{ lineHeight: 40 }}>{children}</Text>
      </TouchableOpacity>
  )
};

const styles = {
  container: {
    flex: 1,
    borderWidth: 0.5,
  },
};

export default WineButton;
