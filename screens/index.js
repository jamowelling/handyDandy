import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './HandyDandy';
import SecondTabScreen from './SecondTabScreen';

export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
}
