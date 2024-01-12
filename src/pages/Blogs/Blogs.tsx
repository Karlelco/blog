import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { Client, Databases, ID } from "appwrite";
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';

interface Values {
  title: string;
  content: string;
  author: string;
}

const YourComponent = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<Values>({
    title: '',
    content: '',
    author: '',
  });
  const [modalVisible, setModalVisible] = useState(false);

  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('659fc6f47df631631aa8');

  const databases = new Databases(client);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const document = await databases.createDocument(
        '659fc75f622537757aa5',
        '659fc776496ba7f003ee',
        ID.unique(),
        formData
      );

      console.log('Document created:', document);
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevFormData: Values) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Create New Document"
        open={modalVisible}
        okText="Create"
        onCancel={handleCancel}
        okType='default'
        onOk={handleSubmit}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter the title"
              prefix={<UserOutlined className="site-form-item-icon" />}
              className="w-full"
            />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[{ required: true, message: 'Please enter the content' }]}
          >
            <TextArea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={4}
              placeholder="Enter the content"
              className="w-full"
            />
          </Form.Item>

          <Form.Item
            name="author"
            rules={[{ required: true, message: 'Please enter the author' }]}
          >
            <Input
              prefix={<UserOutlined />}
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter the author"
              className="w-full"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default YourComponent;
