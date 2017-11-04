import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen',
      icon: require('./img/one.png'), // eslint-disable-line no-undef
      title: 'Screen One',
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/two.png'), // eslint-disable-line no-undef
      title: 'Screen Two',
    },
  ]
});
