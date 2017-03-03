'use strict';
import React, { Component } from 'react';

import { Form, Button, Icon, Input } from 'antd';
const FormItem = Form.Item;

class UserLogin extends Component {

    hasErrors(fieldsError) {
      return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    handleClick = (e) => {
        const { getFieldValue, validateFields } = this.props.form;
        validateFields((err, values) => {
            if (!err) {
                this.props.ActionLogin(values);
            }
        })
    }

    render() {

        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched
        } = this.props.form;

        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('passWord') && getFieldError('passWord');

        const hasError = this.hasErrors(getFieldsError());

        return (
            <Form className="userWraper">
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    { getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: '请输入用户名！'
                        }],
                    })(
                        <Input
                            addonBefore={<Icon type="user" />}
                            placeholder="请输入用户名"
                        />
                    )}
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    { getFieldDecorator('passWord', {
                        rules: [{
                            required: true,
                            message: '请输入密码！'
                        }],
                    })(
                        <Input
                            addonBefore={<Icon type="apple-o" />}
                            placeholder="请输入密码"
                        />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        onClick={this.handleClick}
                        disabled={hasError}
                    >
                        登陆
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export default Form.create()(UserLogin);
