import React, {Component} from 'react';
import {TouchableOpacity,
        Text,
        TextInput,
        View,
        StyleSheet,
        ImageBackground,
        Image,
        Linking} from 'react-native';

import * as ROUTES from './constants';

const fadergsImage = require('../images/fadergs.png');
const background = require('../images/background.jpg');

export default class User extends Component {
    constructor(props) {
      super(props);
      this.state = {
          ra: "",
      }
      this.policyUrl = 'https://qrcode.pythonanywhere.com/privacy';
    }

    render() {


        return (
          <ImageBackground
            source={background}
            style={styles.background}
            >
            <View style={styles.container}>
              <Image
                source={fadergsImage}
                style={styles.fadergsImage}
              />
              <TextInput
                placeholder="informe sua matrícula"
                onChangeText={this.handleTextInput}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Camera', {'ra': this.state.ra})}
                style={styles.button}
              >
                <Text style={styles.textButton}>Ler Qr Code</Text>
              </TouchableOpacity>
              <Text style={styles.textInfo}>
                Este é um projeto em fase de testes. Se você não conseguir usar. Tudo Bem.
              </Text>
              <Text style={[styles.textLink, styles.textLink]} onPress={this.goToPrivacy}>
                política de privacidade
              </Text>
            </View>
          </ImageBackground>
        )
    }

    handleTextInput = (ra) => {
      this.setState({
        ra: ra,
      });
    }

    goToPrivacy = () => {
      Linking.canOpenURL(this.policyUrl).then(supported => {
        if (supported) {
          Linking.openURL(this.policyUrl);
        }
      });
    }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadergsImage: {
    width: 200,
    height: 180,
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
    width: '90%',
    paddingLeft: 15,
    marginBottom: 20,
  },
  textInfo: {
    fontSize: 16,
    textAlign: 'center',
    margin: 25,
    color: 'white',
  },
  textLink: {
    color: 'hsl(204, 86%, 53%)',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: 'blueviolet',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textButton: {
    fontSize: 22,
    color: 'white',
    fontWeight: '700',
  }
});
