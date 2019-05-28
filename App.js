import React, {Component} from 'react';
import {AppRegistry, Button, Text, TextInput, View, ImageBackground} from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import {User, QrCode, Presence} from './components/constants';

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
