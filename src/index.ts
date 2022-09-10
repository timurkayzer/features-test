import * as express from "express";
import { PORT } from "./constants";
import { eventEmitterRouter } from "./eventemitter/router";

const app = express();

console.log('Server started on port ' + PORT);

app.use(express.urlencoded({
    extended: true,
    inflate: true
}));

app.use(express.json({
    inflate: true
}));

app.use(eventEmitterRouter);

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.listen(PORT);