import * as express from "express";
import { PORT } from "./constants";
import { eventEmitterRouter } from "./eventemitter/router";
import { streamsRouter } from "./streams/router";

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
})

app.listen(PORT);