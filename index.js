import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'handyDandy.HandyDandyScreen',
      icon: require('./img/one.png'), // eslint-disable-line no-undef
      title: 'Handy Dandy',
    },
    {
      label: 'Wine List',
      screen: 'handyDandy.WineListScreen',
      icon: require('./img/two.png'), // eslint-disable-line no-undef
      title: 'Screen Two',
    },
  ]
});
