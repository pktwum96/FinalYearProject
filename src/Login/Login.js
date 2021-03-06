import React from "react";
import "./styles/Login.css";
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link, withRouter } from "react-router-dom";
import { UserSignIn } from "../api/api";
import Spinner from "../components/Spinner";
import { connect } from 'react-redux';
import {setUserData} from '../_shared/actions/index';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginFailed:false,
            fetchInProgress:false,
        };
    }

    onEmailChange = data => {
        var my_email = data.target.value;
        this.setState({
            email: my_email
        });
    };

    onPasswordChange = data => {
        var my_password = data.target.value;
        this.setState({
            password: my_password
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var data = {
                    email: values.userName,
                    password: values.password
                };
                this.setState({
                    fetchInProgress:true,
                })
                UserSignIn(data)
                .then(res => {
                    var user_data = res.data;
                    if (user_data.success) {
                        this.setState({
                            fetchInProgress:false,
                        })
                        this.props.setUserData(user_data.data[0]);
                        this.props.history.push("/dashboard");
                    } else {
                        this.setState({
                            fetchInProgress:false,
                            loginFailed:true
                        })
                    }
                })
                .catch(error => console.log(error.data));
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                {this.state.fetchInProgress &&  <Spinner/>}
                <div id="LoginPage">
                    <div className="LoginForm">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <h1>iPortfolio</h1>
                            <div className="formwrapper mx-3">
                                {this.state.loginFailed &&<h6 className="text-danger text-center"><strong>Login Failed! </strong><br/> Please check credentials and try again!</h6>}
                                <Form.Item>
                                    {getFieldDecorator("userName", {
                                        rules: [
                                            { required: true, message: "Please input your email!" }
                                        ]
                                    })(
                                        <Input
                                            prefix={
                                                <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                                            }
                                            placeholder="Email"
                                            onChange={text => this.onEmailChange(text)}
                                            />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("password", {
                                        rules: [
                                            { required: true, message: "Please input your Password!" }
                                        ]
                                    })(
                                        <Input
                                            prefix={
                                                <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                                            }
                                            type="password"
                                            placeholder="Password"
                                            onChange={text => this.onPasswordChange(text)}
                                            />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <span>
                                        {getFieldDecorator("remember", {
                                            valuePropName: "checked",
                                            initialValue: true
                                        })(<Checkbox>Remember me</Checkbox>)}
                                        <a className="login-form-forgot" href="/forgotpassword">
                                            Forgot password
                                        </a>
                                    </span>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        >
                                        Login
                                    </Button>
                                    <span className="centered">
                                        Or <Link to="register">register now!</Link>
                                </span>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}
}

const mapStateToProps =(state) => {
	return {
		cart: state.investmentAsset.cart,
		serviceFee:state.investmentAsset.serviceFee,
		cartSubTotal:state.investmentAsset.cartSubTotal,
		cartTotal:state.investmentAsset.cartTotal
	}
}

const mapDispatchToProps = {
    setUserData,
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(withRouter(Login)));

//export default Form.create()(withRouter(Login));
