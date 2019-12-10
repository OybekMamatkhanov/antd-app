import React, { useState, useRef, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import LoginForm from '../LoginForm.jsx';
import "antd/dist/antd.css";
const { Header, Content, Footer} = Layout;

export default ({children}) => {
  const [ showModal, setShowModal ] = useState(false);
  const formRef = useRef();

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleCreate = () => {
    let form = formRef.current.form;
    
    form.validateFields((err, values) => {
      if (err) {
        console.log("Error: ", values);
        return;
      }
      console.log("Received values of form: ", values);
      form.resetFields();
      setShowModal(false);
    });
  };


  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1" style={{ float: "left" }} onClick={() => setShowModal(true)}>Log In</Menu.Item>
        <LoginForm
            visible={showModal}
            onCancel={handleCancel}
            onCreate={handleCreate}
            wrappedComponentRef={formRef}
        />
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={
        { 
          background: '#fff', 
          padding: 24, 
          minHeight: 380 
        }
      }>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center', bottom: "100px"}}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

