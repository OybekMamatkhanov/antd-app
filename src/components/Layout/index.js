import React, { useState, useCallback} from 'react';
import { Layout, Menu } from 'antd';
import { Button } from "antd";
import "antd/dist/antd.css";
const { Header, Content, Footer} = Layout;

export default ({children}) => {
  const [visible, setVisible] = useState(false);
  const [formRef, setFormRef] = useState(null);

  const handleCreate = () => {
    formRef.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      formRef.resetFields();
      setVisible(false);
    });
  };

  const saveFormRef = useCallback(node => {
    if (node !== null) {
      setFormRef(node);
    }
  }, []);

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
        <Button style={{float: "left"}} type="primary" onClick={() => setVisible(true)}>
          Log in
        </Button>
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
}

