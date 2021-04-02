const ChatWebSocket = ({ nickName, nickColor, msgAllCallback, activeUserCallback, logoutUserCallback }) => {
    const ws = new WebSocket("wss://chat-nodejs-leonid.herokuapp.com/");
    //const ws = new WebSocket("ws://localhost:9000/");
    let pingInterval;

    ws.onopen = () => {
        console.log('websocket is connected...');
        ws.send(JSON.stringify({ type: 'LOGIN', nickName, nickColor }));

        pingInterval = setInterval(() => ws.send(JSON.stringify({ type: "PING" })), 30000);
    };

    // обработчик входящих сообщений
    ws.onmessage = msg => {
        const data = JSON.parse(msg.data);
        console.log(data);

        switch (data.type) {
            case "ACTIVE_USER": {
                activeUserCallback(data.activeUser);
                break;
            }
            case "MSG_ALL": {
                msgAllCallback(data.messages);
                break;
            }
            case "PONG": {
                break;
            }
        }

    };

    ws.onerror = error => {
        console.log("socket error");

        clearInterval(pingInterval);
        logoutUserCallback();
    };

    ws.onclose = () => {
        console.log("socket is close");

        clearInterval(pingInterval);
        logoutUserCallback();
    };

    return ws;
}

export default ChatWebSocket;