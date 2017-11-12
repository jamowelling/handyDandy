import { Navigation } from 'react-native-navigation';

import HandyDandyScreen from './HandyDandyScreen';
import WineListScreen from './WineListScreen';
import PushedScreen from './PushedScreen.js';

export function registerScreens() {
  Navigation.registerComponent('handyDandy.HandyDandyScreen', () => HandyDandyScreen);
  Navigation.registerComponent('handyDandy.WineListScreen', () => WineListScreen);
  Navigation.registerComponent('handyDandy.PushedScreen', () => PushedScreen);
}
