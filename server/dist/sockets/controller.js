"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketController = void 0;
const socketController = (socket) => {
    console.log(socket.handshake.headers['x-token']);
};
exports.socketController = socketController;
//# sourceMappingURL=controller.js.map