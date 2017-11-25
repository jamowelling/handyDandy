import { Navigation } from 'react-native-navigation';

import HandyDandyScreen from './HandyDandy/HandyDandyScreen';
import WineListScreen from './WineList/WineListScreen';
import WineDetailScreen from './WineList/WineDetailScreen';
import TechSheet from './WineList/TechSheet';
import EntryCreationScreen from './HandyDandy/EntryCreationScreen';
import EntryDisplayScreen from './EntryDisplay/EntryDisplayScreen';

export function registerScreens() {
  Navigation.registerComponent('handyDandy.HandyDandyScreen', () => HandyDandyScreen);
  Navigation.registerComponent('handyDandy.WineListScreen', () => WineListScreen);
  Navigation.registerComponent('handyDandy.WineDetailScreen', () => WineDetailScreen);
  Navigation.registerComponent('handyDandy.TechSheet', () => TechSheet);
  Navigation.registerComponent('handyDandy.EntryCreationScreen', () => EntryCreationScreen);
  Navigation.registerComponent('handyDandy.EntryDisplayScreen', () => EntryDisplayScreen);
}
