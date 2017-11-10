import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
} from 'react-native';
import ActionButton from 'react-native-action-button';


export default class HandyDandy extends Component<{}> {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['entry 1', 'entry 2']),
    };
  }
  static navigatorStyle = {
    navBarTranslucent: true,
    navBarTitleTextCentered: true,
  };
  onPress = () => {
    alert('hi!');
    this.props.navigator.push({ // eslint-disable-line 
      screen: 'handyDandy.PushedScreen',
      title: 'Entry Creation',
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <Text>{rowData}</Text>}
        />
        <ActionButton buttonColor='rgba(12,220,220,1)' onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
