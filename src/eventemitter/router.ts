import { Router } from "express";
import { loggerEventEmitter } from "./eventemitter";

const eventEmitterRouter = Router();

eventEmitterRouter.post('/test-event', (req, res) => {
    loggerEventEmitter.emit("message", JSON.stringify(req.body));
    res.send("Message received");
    res.end();
});

process.on("uncaughtException", (err) => {
    loggerEventEmitter.emit("error", err);
})

export { eventEmitterRouter };