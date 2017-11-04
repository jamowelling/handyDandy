// import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
// import HandyDandy from './HandyDandy';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen',
      icon: require('./img/one.png'),
      title: 'Screen One',
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/two.png'),
      title: 'Screen Two',
    },
  ]
});

// AppRegistry.registerComponent('handyDandy', () => HandyDandy);
