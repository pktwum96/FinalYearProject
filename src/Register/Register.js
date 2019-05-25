import React from "react";
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
    AutoComplete
} from "antd";
import "./styles/Register.css";
import "antd/dist/antd.css";
import { UserSignUp } from "../api/api";
import { withRouter } from "react-router-dom";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            alreadyRegistered:false,
            checked: false,
        };

        this.handleCheckBox=this.handleCheckBox.bind(this);
    }

    handleCheckBox (){
        this.setState({
            checked:!this.state.checked
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var email = values.email;
                var password = values.password;
                var confirm_password = values.confirm;
                var phone = values.phone;

                var data = {
                    email: email,
                    password: password,
                    mobile_number: phone
                };

                UserSignUp(data)
                .then(res => {
                    var data = res.data
                    if(data.id){
                        this.props.history.push("/login")
                        console.log(res.data);
                    } else{
                        console.log("User already registered")
                        this.setState({
                            alreadyRegistered:true
                        })
                    }
                })
                .catch(error => console.log(error.data));
            }
        });
    };

    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = [".com", ".org", ".net"].map(
                domain => `${value}${domain}`
            );
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };
        const prefixSelector = getFieldDecorator("prefix", {
            initialValue: "233"
        })(
            <Select style={{ width: 80 }}>
                <Option value="233">+233</Option>
                <Option value="234">+234</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <React.Fragment>
                <div id="Registerpage">
                    <div className="RegisterDiv">
                        <div className="innerdiv">
                            <Form onSubmit={this.handleSubmit}>
                                <div className="formwrapper mx-3">
                                    {this.state.alreadyRegistered &&<h6 className="text-danger text-center p-4 my-3"><strong className="my-2">Email Taken! </strong><br/> Please use new email otherwise Login!</h6>}

                                    <Form.Item {...formItemLayout} label="E-mail">
                                        {getFieldDecorator("email", {
                                            rules: [
                                                {
                                                    type: "email",
                                                    message: "The input is not valid E-mail!"
                                                },
                                                {
                                                    required: true,
                                                    message: "Please input your E-mail!"
                                                }
                                            ]
                                        })(<Input />)}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="Password">
                                        {getFieldDecorator("password", {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "Please input your password!"
                                                },
                                                {
                                                    validator: this.validateToNextPassword
                                                }
                                            ]
                                        })(<Input type="password" />)}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="Confirm Password">
                                        {getFieldDecorator("confirm", {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "Please confirm your password!"
                                                },
                                                {
                                                    validator: this.compareToFirstPassword
                                                }
                                            ]
                                        })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
                                    </Form.Item>

                                    <Form.Item {...formItemLayout} label="Phone Number">
                                        {getFieldDecorator("phone", {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: "Please input your phone number!"
                                                }
                                            ]
                                        })(
                                            <Input
                                                addonBefore={prefixSelector}
                                                style={{ width: "100%" }}
                                                />
                                        )}
                                    </Form.Item>

                                    <div className="d-flex justify-content-center align-items-center my-4">
                                    <input id="checkBox" className="mr-4" type="checkbox" onClick={()=>this.handleCheckBox()} checked={this.state.checked} className="form-control"/>
                                    <label for="checkBox" className="ml-2 my-0">
                                        I have read the <a href="/">agreement</a>
                                    </label>
                                    </div>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" disabled={!this.state.checked}>
                                        Register
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
}

export default Form.create()(withRouter(Register));
