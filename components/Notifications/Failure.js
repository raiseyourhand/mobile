import React from 'react';
import {Text,
        View,
        Image,
        StyleSheet,
        ImageBackground,
        TouchableOpacity,
        BackHandler} from 'react-native';

const downImage = require('../../images/down.png');

const TouchableFailure = (props) => (
  <TouchableOpacity onPress={props.TouchableAction}>
    <Text
      style={style.textClose}
    >
      tentar de novo
    </Text>
  </TouchableOpacity>
)

const style = StyleSheet.create({
  textClose: {
    fontSize: 20,
    color: 	'hsl(204, 86%, 53%)',
  }
});

export default TouchableFailure;
