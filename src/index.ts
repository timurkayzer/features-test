import * as express from "express";
import { PORT } from "./constants";

const app = express();

console.log('Server started on port ' + PORT);

app.get('/', function (req, res) {
    res.send("Hello world");
})

app.listen(PORT);