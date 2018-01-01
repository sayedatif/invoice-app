import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, message } from 'antd';
import { auth, googleProvider, facebookProvider, twitterProvider } from '../firebase.js';
import { setToken } from '../utils/AuthService';
import { actions as invoiceAction } from '../reducers/invoiceReducer';

class SocialBlock extends React.Component {

  getUserDetail = (user) => {
    return {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      refreshToken: user.refreshToken,
      uniqueKey: user.ca.a
    }
  }

  processUserData = (result) => {
    setToken(result.credential.accessToken);
    const user = this.getUserDetail(result.user);
    this.props.setUser(user);
    message.success(`Successfully logged in as ${user.displayName}`);
  }

  googleLogin = () => {
    auth.signInWithPopup(googleProvider).then(result => {
      console.log('result', result);
      this.processUserData(result);
    }).catch(err => {
      if (err) {
        message.error(err.message);
      }
    })
  }

  facebookLogin = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
      console.log('result', result);
      this.processUserData(result);
    }).catch(err => {
      if (err) {
        message.error(err.message);
      }
    })
  }

  twitterLogin = () => {
    auth.signInWithPopup(twitterProvider).then(result => {
      console.log('result', result);
      this.processUserData(result);
    }).catch(err => {
      if (err) {
        message.error(err.message);
      }
    })
  }

  render() {
    return (
      <Row style={{ minHeight: 40, display: 'flex'}}>
        <Col span={8}>
          <Button className="social-button facebook-button" icon="facebook" onClick={this.facebookLogin}>
            Facebook
          </Button>
        </Col>
        <Col span={8}>
          <Button className="social-button google-button" icon="google" onClick={this.googleLogin}>
            Google
          </Button>
        </Col>
        <Col span={8}>
          <Button className="social-button twitter-button" icon="twitter" onClick={this.twitterLogin}>
            Twitter
          </Button>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => ({
  user: state.invoice.user
})

const mapDispatchToProps = dispatch => ({
  setUser: (data) => dispatch(invoiceAction.setUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SocialBlock);
