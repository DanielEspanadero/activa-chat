"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
alert('hola');
const socket = (0, socket_io_client_1.io)('http://localhost:5000');
socket.emit("hello");
socket.on("noArg", () => {
    console.log('errrr');
    // ...
});
socket.on("basicEmit", (a, b, c) => {
    // a is inferred as number, b as string and c as buffer
});
socket.on("withAck", (d, callback) => {
    // d is inferred as string and callback as a function that takes a number as argument
});
//# sourceMappingURL=socket.client.js.map