import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Image} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import * as ROUTES from './constants';

const gridImage = require('../images/grid.png');

export default class QrCode extends Component {
  constructor(props) {
    super(props);
  }

  onSuccess = (event) => {
    let data;
    try {
      data = JSON.parse(event.data);
    }
    catch(error) {
      data = {id: '-1'};
    }
    const ra = this.props.navigation.getParam('ra', '');
    this.props.navigation.navigate('Feedback', {'ra': ra, 'qrcodeid': data.id});
    // this.props.setqrCodeId(data.id);
    // this.props.goToPath(ROUTES.FAILURE_PAGE);
  }

  render() {
    return(
      <QRCodeScanner
        reactivate={false}
        onRead={this.onSuccess}
        reactivateTimeout={1}
        cameraStyle={styles.camera}
        showMarker={true}
        customMarker={<Grid />}
        topViewStyle={styles.hidden}
        bottomViewStyle={styles.hidden}
        containerStyle={styles.container}
        cameraProps={
          {
            captureAudio: false,
          }
        }
      />
    )
  }
}

function Grid() {
  return <Image
            source={gridImage}
            style={styles.grid}
         />
}

const styles = StyleSheet.create({
  camera: {
    height: '100%',
    width: '100%',
  },
  marker: {
    borderWidth: 12,
    borderColor: 'white',
    borderStyle: 'dashed',
    borderRadius: 1,
    width: 150,
    height: 150,
    opacity: .6,
  },
  hidden: {
    display: 'none',
  },
  grid: {
    width: 200,
    height: 200,

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
