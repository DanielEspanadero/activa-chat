"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketController = void 0;
const socketController = (socket) => {
    // console.log(socket.handshake.headers['x-token']);
    // setInterval(() => socket.emit("hello", "server li diu hello al client"), 5000);
    socket.on("howareyou", (arg) => {
        console.log(arg);
    });
    socket.on("connect", () => {
        console.log('Socket online');
    });
    socket.on("disconnect", () => {
        console.log('socket offline');
    });
};
exports.socketController = socketController;
//# sourceMappingURL=controller.js.map