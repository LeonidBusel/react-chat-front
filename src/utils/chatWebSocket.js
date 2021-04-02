const ChatWebSocket = ({ nickName, nickColor, msgAllCallback, activeUserCallback, logoutUserCallback }) => {
    const ws = new WebSocket("wss://chat-nodejs-leonid.herokuapp.com/");

    ws.onopen = () => {
        console.log('websocket is connected...');
        ws.send(JSON.stringify({ type: 'LOGIN', nickName, nickColor }));
    };

    // обработчик входящих сообщений
    ws.onmessage = msg => {
        const data = JSON.parse(msg.data);

        switch (data.type) {
            case "ACTIVE_USER": {
                activeUserCallback(data.activeUser);
                break;
            }
            case "MSG_ALL": {
                msgAllCallback(data.messages);
                break;
            }
        }

    };

    ws.onerror = error => {
        console.log("socket error");

        logoutUserCallback();
    };

    ws.onclose = () => {
        console.log("socket is close");

        logoutUserCallback();
    };

    return ws;
}

export default ChatWebSocket;