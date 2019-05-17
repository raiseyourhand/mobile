import React from 'react';
import {Text,
        View,
        Image,
        StyleSheet,
        ImageBackground,
        TouchableOpacity,
        BackHandler} from 'react-native';

const background = require('../../images/background.jpg');

const withBase = (TouchableComponent) => ({children, img, ...rest}) =>
  <ImageBackground
    source={background}
    style={style.background}
    >
    <View style={style.container}>
      <Text style={style.textInfo}>{children}</Text>
      <Image
        source={img}
        style={style.image}
        />
      <TouchableComponent {...rest}/>
    </View>
  </ImageBackground>

const style = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 150,
    marginBottom: 25,
  },
  textInfo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 25,
    color: 'white',
  },
  background: {
    width: '100%',
    height: '100%',
  }
});

export default withBase;
