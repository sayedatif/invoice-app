import React from 'react';
import { connect } from 'react-redux';
import { Form, Divider } from 'antd'
import { Redirect } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import { isLoggedIn } from '../utils/AuthService';
import SocialBlock from '../helpers/SocialBlock'

class Login extends React.Component {

  render() {
    if(isLoggedIn() && this.props.userLoggedIn) {
      return (
        <Redirect to="/" />
      )
    }

    const AuthForm = Form.create()(LoginForm)

    return (
      <div style={{ minWidth: 400 }}>
        <AuthForm />
        <Divider className="divider">OR</Divider>
        <SocialBlock></SocialBlock>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  userLoggedIn: state.invoice.userLoggedIn
})

export default connect(mapStateToProps, null)(Login);
