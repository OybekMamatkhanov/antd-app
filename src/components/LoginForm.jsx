import { Button, Modal, Form, Input } from 'antd';
import React, { useState, withProps, useImperativeHandle } from 'react';

const LoginFromik = React.forwardRef((props, ref) => {
      const { visible, onCancel, onCreate, form } = props;
      const { getFieldDecorator } = form;

      useImperativeHandle(ref, () => ({
        form
      }));

      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="username">
              {
                  getFieldDecorator('username', {
                      rules: [
                          { required: true, message: 'Please type username!' }  
                      ],
                  })(<Input />) 
              }
            </Form.Item>
            <Form.Item label="password">
              {
                  getFieldDecorator('password', {
                      rules: [
                          { required: true, message: 'Please type password'}
                      ]
                  })(<Input type="password" />)
              }
            </Form.Item>              
          </Form>
        </Modal>
      );
  });

const LoginForm = Form.create({ name: 'form_in_modal' })(LoginFromik);

export default LoginForm;