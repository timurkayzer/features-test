import { EventEmitter } from "node:events";

const loggerEventEmitter = new EventEmitter();

loggerEventEmitter.on("message", (...args) => {
    console.log("Data received, ", args);
});

loggerEventEmitter.on("error", (err) => {
    console.error("Uncaught exception happened, ", err?.toString());
});

export { loggerEventEmitter };