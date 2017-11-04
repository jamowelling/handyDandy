import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './HandyDandy';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen.js';

export function registerScreens() {
  Navigation.registerComponent('handyDandy.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('handyDandy.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('handyDandy.PushedScreen', () => PushedScreen);
}
