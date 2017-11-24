import React from 'react';
import { View, TextInput } from 'react-native';

const EntryCreationTitle = ({ value, onChangeText }) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.titleStyle}
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder='Title'
      />
    </View>
  )
};

const styles = {
  titleStyle: {
    fontSize: 18,
    color: 'rgba(100,100,100,1)',
    padding: 10,
    fontFamily: 'serif'
  }
}

export default EntryCreationTitle;
