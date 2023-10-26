import React from 'react';
import {Button, Col, Row, Checkbox, Form, Input} from 'antd';
import LoginCarousel from "./LoginCarousel";
import loginBG from '../../assets/img/login-bg.png';
import "../../styles/components/login.less"

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const Login = () => (
    //  className="d-flex flex-col h-full bg-white"
    <div className="login-root">
        {/* className="flex flex-grow"*/}
        <Row data-testid="signin-page">
            <Col span={8}>
                <div className="login-form">
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input placeholder="UserName" className="login-input"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Password" className="login-input"/>
                        </Form.Item>
                    </Form>
                    <Button type="primary" htmlType={"submit"} className="login-button">
                        登录
                    </Button>
                </div>
            </Col>
            <Col span={16}>
                <div className="login-bg">
                    <img alt="bg-image" className="bg-img" data-testid="bg-image" src={loginBG}/>
                </div>
                <LoginCarousel/>
            </Col>
        </Row>
    </div>

);
export default Login;