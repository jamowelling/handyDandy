import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ListEntry = ({ onPress, onLongPress, title, entry}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      onLongPress={() => onLongPress(entry)}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(150,150,150,0.9)',
    paddingVertical: 10,
  },
  textStyle: {
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  }
};

export default ListEntry;
