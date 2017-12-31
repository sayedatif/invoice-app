import React from 'react';
import { Form, Icon, Input, Button, Divider } from 'antd'
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/AuthService';
import SocialBlock from '../helpers/SocialBlock'
const FormItem = Form.Item;

class Login extends React.Component {

  // authenticate = () => {
  //   auth.createUserWithEmailAndPassword().catch(function(err) {
  //
  //   })
  // }

  render() {
    if(isLoggedIn()) {
      return (
        <Redirect to="/" />
      )
    }

    return (
      <div style={{ minWidth: 400 }}>
        <Form className="login-form">
          <FormItem>
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
                className="input-style"/>
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                className="input-style" />
          </FormItem>
          <FormItem>
            <Button type="dashed" htmlType="submit" className="login-form-button">
              Sign in
            </Button>
          </FormItem>
        </Form>
        <Divider className="divider">OR</Divider>
        <SocialBlock></SocialBlock>
      </div>
    )
  }
};

export default Login;
