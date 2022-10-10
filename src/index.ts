import * as express from "express";
import http from 'http';
import { Server } from "socket.io";
import { eventEmitterRouter } from "./eventemitter/router";
import { streamsRouter } from "./streams/router";
import { Server as WsServer } from 'ws';
import { PORT } from "./constants";

try {
    const app = express();

    const server = http.createServer(app);

    const io = new Server(server);
    io.on('connection', (socket) => {
        console.log('Aaaaa');
    });

    const wsServer = new WsServer({
        port: 5000
    });

    wsServer.on('connection', (wsClient) => {
        wsClient.send('Test');
        console.log('Test');
        wsClient.on('message', (message) => {
            wsClient.send('Message accepted');
            console.log(message?.toString());
        });

        wsClient.on('close', () => {
            console.log(`Connection closed`);
        });
    });


    console.log('Server started on port ' + PORT);

    app.use(
        express.json({
            inflate: true
        }),
        express.urlencoded({
            extended: true,
            inflate: true
        }),
        eventEmitterRouter,
        streamsRouter
    );

    app.get('/', function (req, res) {
        res.send("Hello world");
    });



    server.listen(PORT);
}
catch (e) {
    console.error(e);
}
