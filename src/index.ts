import * as express from "express";
import { PORT } from "./constants";
import { eventEmitterRouter } from "./eventemitter/router";
import { streamsRouter } from "./streams/router";
import { Server } from 'ws';

const wsServer = new Server({
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


const app = express();

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



app.listen(PORT);