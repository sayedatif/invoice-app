import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd'
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
                type="password"
                placeholder="Password"
                className="input-style" />
          )}
        </FormItem>
        <FormItem>
          <Button type="dashed" onClick={this.authenticate} className="login-form-button">
            Sign in
          </Button>
          <a className="login-form-forgot" href="">Forgot password ?</a>
        </FormItem>
      </Form>
    )
  }
}

export default LoginForm;
