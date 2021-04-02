import { List, Typography } from 'antd';

import "./activeUser.scss";

const { Text } = Typography;

const ActiveUser = ({ allUser }) => {
    return (
        <div className="active-user-wrapper">
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