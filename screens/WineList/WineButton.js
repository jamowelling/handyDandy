import React from 'react';
import { View, Text } from 'react-native';

const WineButton = ({ children }) => {
  return (
      <View>
        <Text>{children}</Text>
      </View>
  )
};

export default WineButton;
