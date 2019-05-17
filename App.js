import React, {Component} from 'react';
import {AppRegistry, Button, Text, TextInput, View, ImageBackground} from 'react-native';
import Presence from './components/Presence';
import QrCode from './components/QrCode';
import User from './components/User';
import * as ROUTES from './components/constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserScreen: true,
      isUserPresent: false,
      ra: null,
      qrcode_id: null,
      path: ROUTES.INPUT_PAGE,
    }
  }

  goToPath = (path) => {
    this.setState({path: path});
  }

  render() {
      const {path} = this.state;

      if (path === ROUTES.INPUT_PAGE)
        return <User
                  isUserPresent={this.state.isUserPresent}
                  setRa={this.setRa}
                  goToPath={this.goToPath}
                />
      else if (path === ROUTES.CAMERA_PAGE)
        return <QrCode
                  ra={this.state.ra}
                  setqrCodeId={this.setqrCodeId}
                  goToPath={this.goToPath}
                />
      else if (path === ROUTES.SUCCESS_PAGE || path === ROUTES.FAILURE_PAGE)
        return <Presence
                  ra={this.state.ra}
                  qrcodeid={this.state.qrcode_id}
                  goToPath={this.goToPath}
                />
  }

  switchScreen = () => {
    this.setState(state => ({
      isUserScreen: !state.isUserScreen,
    }));
  }

  setIsUserPresent = (data) => {
    this.setState({
      isUserPresent: data,
    });
  }

  setRa = (ra) => {
    this.setState({
      ra: ra,
    });
  }

  setqrCodeId = (id) => {
    this.setState({
      qrcode_id: id,
    });
  }
}

AppRegistry.registerComponent('App', () => App)
