import React from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        placeholder='Search entries'
        underlineColorAndroid='rgba(0,0,0,0)'
        style={styles.textInputStyle}
      />
    </View>
  );
};

const styles = {
  searchWrapper: {
    backgroundColor: '#fff',
    borderRadius: 25,
    margin: 6,
    marginTop: 50,
    borderWidth: 1.5,
    borderColor: '#ccc',
  },
  textInputStyle: {
    marginLeft: 6,
    fontSize: 18,
  },
};

export default SearchBar;
