import React from 'react';
import { connect } from 'react-redux';
import { Form, Divider, message } from 'antd'
import { Redirect } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import { isLoggedIn } from '../utils/AuthService';
import SocialBlock from '../helpers/SocialBlock'
import { actions as invoiceAction } from '../reducers/invoiceReducer';
import { setToken } from '../utils/AuthService';

class Login extends React.Component {

  getUserDetail = (user) => {
    const photo = user.photoURL || 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg';
    return {
      displayName: user.displayName,
      email: user.email,
      photoURL: photo,
      phoneNumber: user.phoneNumber,
      refreshToken: user.refreshToken,
      uniqueKey: user.ca.a
    }
  }

  processUserData = (result, type) => {
    const token = type === 'social' ? result.user.pa : result.pa
    const user = this.getUserDetail(result.user || result);
    setToken(token);
    this.props.setUser(user);
    message.success(`Successfully logged in as ${user.displayName ? user.displayName : user.email}`);
  }

  render() {
    if(isLoggedIn() && this.props.userLoggedIn) {
      return (
        <Redirect to="/" />
      )
    }

    const AuthForm = Form.create()(LoginForm)

    return (
      <div style={{ minWidth: 400 }}>
        <AuthForm processDetail={(data, type) => this.processUserData(data, type)} />
        <Divider className="divider">OR</Divider>
        <SocialBlock processDetail={(data, type) => this.processUserData(data, type)} />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  userLoggedIn: state.invoice.userLoggedIn
})

const mapDispatchToProps = dispatch => ({
  setUser: (data) => dispatch(invoiceAction.setUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
