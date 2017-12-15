/* eslint-disable max-len */
import { Navigation } from 'react-native-navigation';

import HandyDandyScreen from './HandyDandy/HandyDandyScreen';
import WineListScreen from './WineList/WineListScreen';
import WineDetailScreen from './WineList/WineDetailScreen';
import TechSheet from './WineList/TechSheet';
import EntryCreationScreen from './HandyDandy/EntryCreationScreen';
import SideDrawer from './Drawer/SideDrawer';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('handyDandy.HandyDandyScreen', () => HandyDandyScreen, store, Provider);
  Navigation.registerComponent('handyDandy.WineListScreen', () => WineListScreen, store, Provider);
  Navigation.registerComponent('handyDandy.WineDetailScreen', () => WineDetailScreen, store, Provider);
  Navigation.registerComponent('handyDandy.TechSheet', () => TechSheet, store, Provider);
  Navigation.registerComponent('handyDandy.EntryCreationScreen', () => EntryCreationScreen, store, Provider);
  Navigation.registerComponent('handyDandy.SideDrawer', () => SideDrawer, store, Provider);
}
