import React from 'react';
import { Row, Col, Button, message } from 'antd';
import { auth, googleProvider, facebookProvider, twitterProvider } from '../firebase.js';

class SocialBlock extends React.Component {

  googleLogin = () => {
    auth.signInWithPopup(googleProvider).then(result => {
      console.log('result', result);
      this.props.processDetail(result, 'social');
    }).catch(err => {
      if (err) {
        message.error(err.message);
      }
    })
  }

  facebookLogin = () => {
    auth.signInWithPopup(facebookProvider).then(result => {
      console.log('result', result);
      this.props.processDetail(result, 'social');
    }).catch(err => {
      if (err) {
        message.error(err.message);
      }
    })
  }

  twitterLogin = () => {
    auth.signInWithPopup(twitterProvider).then(result => {
      console.log('result', result);
      this.props.processDetail(result, 'social');
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

export default SocialBlock;
