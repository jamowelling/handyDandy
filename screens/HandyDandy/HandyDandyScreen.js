import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  AsyncStorage
} from 'react-native';
import ActionButton from 'react-native-action-button';


export default class HandyDandyScreen extends Component<{}> {
  state = {
    text: 'Placeholder text',
  }

  static navigatorStyle = {
    navBarTranslucent: true,
    navBarTitleTextCentered: true,
  };
  onPress = async () => {
    this.props.navigator.push({
      screen: 'handyDandy.EntryCreationScreen',
      title: 'New Entry',
    });

      // Rudimentary code for placing data in AsyncStorage
    // try {
    //   await AsyncStorage.setItem('TestText', this.state.text);
    // } catch (error) {
    //   console.log(error);
    // }

      // Rudimentary code for retrieving data from AsyncStorage
    // try {
    //   const value = await AsyncStorage.getItem('TestText');
    //   if (value !== null){
    //     // We have data!!
    //     console.log(value);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   // Error retrieving data
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </View>
        <ActionButton buttonColor='rgba(12,220,220,1)' onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
