import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { Client, Databases, ID } from "appwrite";
import TextArea from 'antd/es/input/TextArea';
import { UserOutlined } from '@ant-design/icons';
import { useSubmit } from 'react-router-dom';
import Blogs from '../../../pages/Blogs/Blogs';

interface Values {
    title: string;
    content: string;
    author: string;
}

interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;

}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();
    const [formData, setFormData] = useState<Values>({
        title: '',
        content: '',
        author: '',
    });
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
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <Modal
            open={open}
            title="Create a new blog"
            okText="Create"
            okType='primary'
            cancelText="Cancel"
            onCancel={ onCancel }
            okButtonProps={ { htmlType: 'submit' } }
            onOk={ () => {
                form.validateFields()
                    .then((_values) => {
                        form.submit();
                        form.resetFields();
                        onCreate(formData);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
                
            } }
            
        >
            <Form form={form}>
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
                        className="w-full max-w-xs"
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
                        className="w-full max-w-xs"
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
                        className="w-full max-w-xs"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const App: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onCreate = (values: Values) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };

    return (
        <div>
            <Blogs/>
            <Button
                type="primary"
                onClick={() => {
                    setOpen(true);
                }}
            >
                New Blog
            </Button>
            <CollectionCreateForm
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </div>
    );
};

export default App;
