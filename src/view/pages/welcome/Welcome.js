import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Layout, Typography, Form, Input, Button } from 'antd';
import { ColorPicker } from '@components';
import { login } from '@slice/loginSlice';
import "./welcome.scss";

const { Header, Content } = Layout;
const { Title } = Typography;

const Welcome = (props) => {
    const [form] = Form.useForm();
    const [color, setColor] = useState("#000");
    const history = useHistory();

    const onFinish = (values) => {
        props.login({ nickName: values.nickname, nickColor: color });
    };

    /* didMount */
    useEffect(() => {
        if (props.userLogin.isLogin) history.push("/chat");
    }, [props.userLogin.isLogin]);

    const colorPickerHandle = ({ color }) => {
        setColor(color);
    }

    return (
        <Layout className="welcome-wrapper">
            <Header>
                <Title className="title">Welcome!</Title>
            </Header>
            <Content>
                <Form
                    form={form}
                    name="login-form"
                    layout="inline"
                    size="medium"
                    onFinish={onFinish}>

                    <Form.Item label="Nick Name" name="nickname" extra="max 15 symbols">
                        <Input placeholder="Type your nickname..." maxLength={15} required />
                    </Form.Item>

                    <Form.Item label="Nick Color" name="color">
                        <ColorPicker color={color} onClose={colorPickerHandle} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">Entry</Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        userLogin: state.userLogin
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);