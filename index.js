import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'handyDandy.HandyDandyScreen',
      icon: require('./src/assets/img/one.png'), // eslint-disable-line no-undef
      title: 'Handy Dandy',
    },
    {
      label: 'Wine List',
      screen: 'handyDandy.WineListScreen',
      icon: require('./src/assets/img/two.png'), // eslint-disable-line no-undef
      title: 'Wine List Nov 2017',
    },
  ],
  drawer: {
    left: {
      screen: 'handyDandy.SideDrawer',
      passProps: {

      },
      disableOpenGesture: false,
      animated: true,
    }
  }
});
