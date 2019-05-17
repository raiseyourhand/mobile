import React, {Component} from 'react';
import {BackHandler} from 'react-native';

import * as ROUTES from './constants';
import {Success, Failure} from './Notifications'

const upImage = require('../images/up.png');
const downImage = require('../images/down.png');

export default class Presence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPresence: true,
      error: null,
      isLoading: true,
      msg: '',
    }
  }

  url = (id) => {
    return `https://qrcode.pythonanywhere.com/api/students/${id}`;
  }

  componentDidMount() {
    const userId = this.props.ra
    const qrId = this.props.qrcodeid
    const isPresence = true
    fetch(this.url(userId), {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        qrCodes: [qrId],
      })
      }).then((response) => {
        if (!response.ok) {
          this.setState({
            isPresence: false,
            isLoading: false,
            msg: 'usuário não existe.',
          })
        } else {
          this.setState({
            isPresence: true,
            isLoading: false,
          })
        }
      }).catch((error) => {
        this.setState({
          isPresence: false,
          isLoading: false,
          msg: 'Ops... Ocorreu um erro.',
        })
      });
  }

  render() {
    {
      if (this.state.isLoading)
        return null

      if (this.state.isPresence)
        return <Success
                  img={upImage}
                  TouchableAction={BackHandler.exitApp}
               >
                Parabéns. Presença efetuada com sucesso.
               </Success>
      else
        return <Failure
                  img={downImage}
                  TouchableAction={() => this.props.goToPath(ROUTES.INPUT_PAGE)}
               >
                {this.state.msg}
              </Failure>
    }
  }
}
