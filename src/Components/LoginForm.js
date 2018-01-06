import React from 'react';
import { Form, Icon, Input, Button, message, Divider } from 'antd'
import { withRouter } from 'react-router-dom'
import { auth } from '../firebase.js';
const FormItem = Form.Item;

class LoginForm extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    const target = e.target
    const key = target.name
    this.setState({
      [key]: target.value
    })
  }

  authenticate = (authType) => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(authType === 'login') {
          auth.signInWithEmailAndPassword(values.email, values.password).then(result => {
            this.props.processDetail(result, 'form');
          }).catch((err) => {
            message.error(err.message);
          })
        } else {
          auth.createUserWithEmailAndPassword(values.email, values.password).then(result => {
            this.props.processDetail(result, 'form');
          }).catch((err) => {
            message.error(err.message);
          })
        }
      }
    });
  }

  goToRoute = (route) => {
    this.props.history.push(route);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const authType = this.props.location.pathname.slice(1)
    const buttonText = authType === 'login' ? 'Sign in' : 'Register';
    const buttonPosition = {
      display: 'flex',
      justifyContent: 'flex-end'
    }
    if(authType === 'login') {
      buttonPosition.justifyContent = 'space-between';
      buttonPosition.alignItems = 'center';
    }

    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{required: true, message: 'Please input valid email address!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="email"
                onChange={this.handleChange}
                onPressEnter={() => this.authenticate(authType)}
                placeholder="Email"
                className="input-style" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="password"
                onChange={this.handleChange}
                onPressEnter={() => this.authenticate(authType)}
                type="password"
                placeholder="Password"
                className="input-style" />
          )}
        </FormItem>
        <FormItem>
          <div style={buttonPosition}>
            {authType === 'login' &&
              <a style={{color: 'rgba(0, 0, 0, 0.65)'}} onClick={() => this.goToRoute('/forgot-password')}>
                Forgot password
              </a>
            }
            <Button type="dashed" onClick={() => this.authenticate(authType)} className="login-form-button">
              {buttonText} <Icon type="arrow-right" />
            </Button>
          </div>
        </FormItem>
        {authType === 'login' &&
          <div>
            <Divider></Divider>
            <FormItem>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p>Need an account ?</p>
                <Button type="dashed" onClick={() => this.goToRoute('/register')} className="register-button">
                  Get Registered
                </Button>
              </div>
            </FormItem>
          </div>
        }
      </Form>
    )
  }
}

export default withRouter(LoginForm);
