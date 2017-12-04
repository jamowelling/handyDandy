import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SearchResult = ({ children }) => {
  return (
    <TouchableOpacity style={styles.resultStyle} >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  resultStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  }
}

export default SearchResult;
