import React from 'react';
import { Button, Form, Input } from 'antd';

const App: React.FC = () => {

  const handelSubmit=(e:any): void=>{
    console.log('handelSubmit:', e);
  }

  return (
    <Form
      name="basic"
      onFinish={handelSubmit}
    
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Profession"
        name="profession"
        rules={[{ required: true, message: 'profession' }]}
      >
        <Input/>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;