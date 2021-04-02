import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory, Link } from "react-router-dom";
import { Layout, Typography, Row, Col } from 'antd';
import { ChatArea, ActiveUser } from "@components";
import { logout } from '@slice/loginSlice';
import { activeUser, allMsg, close } from '@slice/msgSlice';
import ChatWebSocket from '@utils/chatWebSocket';

import "./chat.scss";

const { Header, Content } = Layout;
const { Title } = Typography;

let ws;
const Chat = (props) => {
    const history = useHistory();
    const userLogin = useSelector(state => state.userLogin);
    const allMsg = useSelector(state => state.message.msg);
    const allActiveUser = useSelector(state => state.message.activeUser);
    const { isLogin, nickName, nickColor } = userLogin;


    /* didMount */
    useEffect(() => {
        if (!isLogin) {
            history.push("/react-chat-front");

            return;
        }

        ws = ChatWebSocket({ nickName, nickColor, msgAllCallback, activeUserCallback, logoutUserCallback });
    }, []);

    const sendMsgHandle = (values) => {
        ws.send(JSON.stringify({ type: 'SEND_MSG', message: values.message }));
    }

    const msgAllCallback = (messages) => {
        props.allMsg(messages)
    }

    const activeUserCallback = (activeUser) => {
        props.activeUser(activeUser)
    }


    const logoutUserCallback = () => {
        props.logout();
        props.close();

        if (ws.readyState === 1) {
            ws.send(JSON.stringify({ type: 'LOGOUT' }));
        }
    }

    /* did Update */
    useEffect(() => {
        if (userLogin && !userLogin.isLogin) history.push("/");
    }, [userLogin]);

    // did unmount
    useEffect(() => {
        return () => {
            if (userLogin.isLogin) {
                logoutUserCallback();
            }
        }
    }, [])

    return (
        <Layout className="chat-wrapper">
            <Header>
                <Title className="title">Global Chat!</Title>
            </Header>
            <Content className="chat-content-wrapper">
                <Row><Link to="/react-chat-front">&lt; back to welcome page</Link></Row>
                <Row gutter={24}>
                    <Col span={16}><ChatArea allMsg={allMsg} sendMsgHandle={sendMsgHandle} /></Col>
                    <Col span={8}><ActiveUser allUser={allActiveUser} /></Col>
                </Row>
            </Content>

        </Layout>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout,
        activeUser,
        allMsg,
        close
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Chat);
