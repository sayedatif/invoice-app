import React from 'react';
import { Form, Icon, Input, Button } from 'antd'
const FormItem = Form.Item;

const Login = () => (
  <div style={{ minWidth: 400 }}>
    <Form className="login-form">
      <FormItem>
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" className="input-style"/>
      </FormItem>
      <FormItem>
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" className="input-style" />
      </FormItem>
      <FormItem>
        <Button type="dashed" htmlType="submit" className="login-form-button">
          Sign in
        </Button>
      </FormItem>
    </Form>
  </div>
)

export default Login;
