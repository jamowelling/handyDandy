import React from 'react';
import { View, Text } from 'react-native';

const ListEntry = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    borderWidth: 1, 
  }
};

export default ListEntry;
