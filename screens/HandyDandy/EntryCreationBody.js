import React from 'react';
import { View, TextInput } from 'react-native';

const EntryCreationBody = ({ onChangeText, value, autoFocus }) => {
  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder='Note'
        underlineColorAndroid='rgba(0,0,0,0)'
        style={styles.bodyStyle}
        autoFocus={autoFocus}
        multiline
      />
    </View>
  );
}

const styles = {
  bodyStyle: {
    fontSize: 20,
    color: 'rgba(100,100,100,1)',
    padding: 10,
    fontFamily: 'serif',
  }
}

export default EntryCreationBody;
