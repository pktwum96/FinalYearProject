import React from 'react';
import '../styles/Login.css';
import 'antd/dist/antd.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="LoginPage">
        <div className="LoginForm">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <h1>iPortfolio</h1>
            <div className="formwrapper">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
              <span>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="/forgotpassword">Forgot password</a>
                </span>
                <Button type="primary" htmlType="submit" className="login-form-button" href="/dashboard">
                  Login
                </Button>
                <span className="centered">Or <a href="/register">register now!</a></span>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
}

export default Form.create()(Login);
