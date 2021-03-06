import { List, Typography } from 'antd';

import "./activeUser.scss";

const { Text, Title  } = Typography;

const ActiveUser = ({ allUser }) => {
    return (
        <div className="active-user-wrapper">
            <Title level={3}>Active Users:</Title>
            <List
                dataSource={allUser}
                renderItem={(item, i) => {
                    const { nickName, nickColor, clientId } = item;

                    return (
                        <List.Item key={clientId}>
                            <List.Item.Meta
                                title={<Text style={{ color: nickColor }}>{i+1}. {nickName}</Text>}
                            />
                        </List.Item>
                    )
                }}
            ></List>
        </div>)
}

export default ActiveUser;