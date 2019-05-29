import React, {Component} from 'react';
import {AppRegistry, Button, Text, TextInput, View, ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { useScreens } from 'react-native-screens';

import {User, QrCode, Presence} from './components/screens';

useScreens();

const MainNavigator = createStackNavigator(
  {
    UserInput: {screen: User},
    Camera: {screen: QrCode},
    Feedback: {screen: Presence},
  },
  {
    initialRouteName: 'UserInput',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontSize: 18,
      },
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;

AppRegistry.registerComponent('App', () => App)
