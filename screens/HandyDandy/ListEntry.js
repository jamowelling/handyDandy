import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ListEntry = ({ onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flex: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
  }
};

export default ListEntry;
