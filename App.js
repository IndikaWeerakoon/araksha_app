/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import MapScreen from './app/screen/mapscreen';
import RouteScreen from './app/screen/routescreen';
import HistoryScreen from './app/screen/historyscreen';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

const AppDrawerNavigator = createDrawerNavigator({
  Map: {
    screen: MapScreen,
  },
  Route: {
    screen: RouteScreen,
  },
  History: {
    screen: HistoryScreen,
  },
});

const App =createAppContainer(AppDrawerNavigator);

export default App;
