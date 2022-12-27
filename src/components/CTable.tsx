import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { IStudent } from '../interfaces/Student.interface';

const { Column } = Table;

type studentProps = {
    data: IStudent[]
}
const ITable: React.FC<studentProps> = ({data}) => (
  <Table dataSource={data}>
    <Column title="Id" dataIndex="id" key="id" />
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Profession" dataIndex="profession" key="profession" />
    <Column
      title="Action"
      key="action"
      render={(_: any, record: IStudent) => (
        <Space size="middle">
          <a>Invite {record.id}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default ITable;