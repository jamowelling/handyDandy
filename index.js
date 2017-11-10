import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'handyDandy.FirstTabScreen',
      icon: require('./img/one.png'), // eslint-disable-line no-undef
      title: 'Handy Dandy',
    },
    {
      label: 'Two',
      screen: 'handyDandy.SecondTabScreen',
      icon: require('./img/two.png'), // eslint-disable-line no-undef
      title: 'Screen Two',
    },
  ]
});
