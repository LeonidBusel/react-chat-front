import { List, Typography, Form, Input, Button } from 'antd';

import "./chatArea.scss";

const { Text } = Typography;
const { TextArea } = Input;

const ChatArea = ({ allMsg, sendMsgHandle }) => {
    const [form] = Form.useForm();

    return (
        <div className="chat-area-wrapper">
            <List
                className="chat-body"
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
            <Form
                className="msg-send-form"
                form={form}
                name="message-form"
                layout="inline"
                size="medium"
                onFinish={sendMsgHandle}>

                <Form.Item name="message" className="text-area-wrapper">
                    <TextArea rows={2} placeholder="Type msg..." required />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Send</Button>
                </Form.Item>
            </Form>
        </div>)
}

export default ChatArea;