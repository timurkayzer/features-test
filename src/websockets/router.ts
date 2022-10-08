import { Server } from 'ws';

const wsServer = new Server({
    port: 5000
});

wsServer.on('connection', (wsClient) => {
    wsClient.send('Test');
    wsClient.on('message', (message) => {
        wsClient.send('Message accepted');
        console.log(message);
    });

    wsClient.on('close', () => {
        console.log(`Connection closed`);
    });
});

export { wsServer };