import React from 'react';
import { Button, Space } from 'antd';
import CForm from './CForm';
import { Link } from "react-router-dom";


const CButton: React.FC = () => (
  <Space wrap>
    <Link to='/cform'>Form</Link>
  </Space>
);

export default CButton;
