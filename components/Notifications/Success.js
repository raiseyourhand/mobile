import React from 'react';
import {Text,
        View,
        Image,
        StyleSheet,
        ImageBackground,
        TouchableOpacity,
        BackHandler} from 'react-native';

const upImage = require('../../images/up.png');

const TouchableSuccess = (props) => (
  <TouchableOpacity onPress={props.TouchableAction}>
    <Text style={style.textClose}>fechar</Text>
  </TouchableOpacity>
)

const style = StyleSheet.create({
  textClose: {
    fontSize: 20,
    color: 	'hsl(204, 86%, 53%)',
  }
});

export default TouchableSuccess;
