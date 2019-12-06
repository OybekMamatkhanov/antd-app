import React from "react";
import { Modal, Form, Input, } from "antd";

const ModalFormComponent = ({ visible, onCancel, onCreate, form }) => {
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Form within a Modal"
        okText="Submit"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <Form.Item label="Title">
            {getFieldDecorator("title", {
              rules: [
                {
                  required: true,
                  message: "Please input the title of collection!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Description">
            {getFieldDecorator("description")(<Input type="textarea" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  
  const LoginForm = Form.create({ name: "modal_form" })(ModalFormComponent);
  
  export default LoginForm;