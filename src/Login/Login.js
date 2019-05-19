import React from 'react';
import './styles/Login.css';
import 'antd/dist/antd.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {Link} from 'react-router-dom';
import { UserLogin, RandomUser } from "../api/api"

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
        }
    }

    onEmailChange = (data) => {
        var my_email = data.target.value
        this.setState({
            email: my_email
        })
    }

    onPasswordChange = (data) => {
        var my_password = data.target.value
        this.setState({
            password: my_password
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            var data = {
                data: {
                    email: values.userName,
                    password: values.password
                }
            }
            //console.log(data)
            //this.props.history.push("/dashboard")
            RandomUser().then(res => console.log(res.data.results)).catch(error => console.log(error))
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
            <div className="formwrapper mx-3">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" onChange={(text) => this.onEmailChange(text)}/>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={(text) => this.onPasswordChange(text)} />
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
                <Button type="primary" htmlType="submit" className="login-form-button">

                  Login
                </Button>
                <span className="centered">Or <Link to="register">register now!</Link></span>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
}

export default Form.create()(Login);
