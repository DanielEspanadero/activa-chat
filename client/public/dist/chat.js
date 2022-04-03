"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const url = 'http://localhost:5000';
let user = null;
let socket = null;
// Validate localstorage token
const validateJWT = () => __awaiter(void 0, void 0, void 0, function* () {
    const token = localStorage.getItem('token') || '';
    if (token.length) {
        window.location.href = '/login';
        throw new Error('Error, no hay token en el servidor!');
    }
    ;
    const resp = yield fetch(url, {
        headers: { 'x-token': token }
    });
    const { user: userDB, token: tokenDB } = yield resp.json();
    localStorage.setItem('token', tokenDB),
        user = userDB,
        document.title = user.name;
    yield connectSocket();
});
const connectSocket = () => __awaiter(void 0, void 0, void 0, function* () {
    const socket = (0, socket_io_client_1.io)('http://localhost:5000', {
        'extraHeaders': {
            'x-token': localStorage.getItem('token')
        }
    });
    socket.on("connect", () => {
        console.log('Socket online');
    });
    socket.on("disconnect", () => {
        console.log('socket offline');
    });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    // Validate JWT
    yield validateJWT();
    yield connectSocket();
});
main();
//# sourceMappingURL=chat.js.map