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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketController = void 0;
const chat_messages_1 = __importDefault(require("../models/chat-messages"));
const generate_jwt_1 = require("../helpers/generate-jwt");
const chatMessages = new chat_messages_1.default();
const socketController = (socket, io) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(socket.handshake.headers['x-token']);
    // setInterval(() => socket.emit("hello", "server li diu hello al client"), 5000);
    const user = yield (0, generate_jwt_1.checkJWT)(socket.handshake.headers['x-token']);
});
exports.socketController = socketController;
//# sourceMappingURL=controller.js.map