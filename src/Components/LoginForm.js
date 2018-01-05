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

  authenticate = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        auth.signInWithEmailAndPassword(values.email, values.password).then(result => {
          console.log('result', result);
          this.props.processDetail(result, 'form');
        }).catch((err) => {
          console.log(err);
          message.error(err.message);
        })
      }
    });
  }

  goToRegister = () => {
    this.props.history.push('/register');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{required: true, message: 'Please input valid email address!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                name="email"
                onChange={this.handleChange}
                onPressEnter={this.authenticate}
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
                onPressEnter={this.authenticate}
                type="password"
                placeholder="Password"
                className="input-style" />
          )}
        </FormItem>
        <FormItem>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <a style={{color: 'rgba(0, 0, 0, 0.65)'}} href="">Forgot password</a>
            <Button type="dashed" onClick={this.authenticate} className="login-form-button">
              Sign in <Icon type="arrow-right" />
            </Button>
          </div>
        </FormItem>
        <Divider></Divider>
        <FormItem>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <p>Need an account ?</p>
            <Button type="dashed" onClick={this.goToRegister} className="register-button">
              Register
            </Button>
          </div>
        </FormItem>
      </Form>
    )
  }
}

export default withRouter(LoginForm);
