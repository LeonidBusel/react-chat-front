import { useEffect, useRef } from 'react';
import { List, Typography, Form, Input, Button } from 'antd';

import "./chatArea.scss";

const { Text } = Typography;
const { TextArea } = Input;

const ChatArea = ({ allMsg, sendMsgHandle }) => {
    const chatBodyEndRef = useRef(null);
    const [form] = Form.useForm();

    const onEnterHandle = (event) => {
        if (event.ctrlKey && ((event.keyCode == 0xA) || (event.keyCode == 0xD))) { // ctrl + enter, submit form
            form.submit();

            event.preventDefault();
        }
    }

    const onFinish = (values) => {
        form.resetFields();
        sendMsgHandle(values);
    }

    useEffect(() => {
        chatBodyEndRef.current.scrollIntoView();
    }, [allMsg]);

    return (
        <div className="chat-area-wrapper">
            <div className="chat-body">
                <List
                    dataSource={allMsg}
                    renderItem={item => {
                        const { nickName, nickColor, id, message, date } = item;

                        return (
                            <List.Item key={id}>
                                <List.Item.Meta
                                    title={<><Text style={{ color: nickColor }}>{nickName}</Text> <Text type="secondary">{date}</Text></>}
                                    description={<Text>{message}</Text>}
                                />
                            </List.Item>
                        )
                    }}
                ></List>
                <div className="chat-body-end-fake" ref={chatBodyEndRef} />
            </div>
            <Form
                className="msg-send-form"
                form={form}
                name="message-form"
                layout="inline"
                size="medium"
                onFinish={onFinish}>

                <Form.Item name="message" className="text-area-wrapper" extra="press ctrl + enter for send msg">
                    <TextArea rows={2} placeholder="Type msg..." required onKeyDown={onEnterHandle} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Send</Button>
                </Form.Item>
            </Form>
        </div>)
}

export default ChatArea;