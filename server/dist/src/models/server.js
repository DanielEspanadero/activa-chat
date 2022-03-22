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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const config_1 = require("../db/config");
// Routes path
const auth_1 = __importDefault(require("../routes/auth"));
const chat_1 = __importDefault(require("../routes/chat"));
const register_1 = __importDefault(require("../routes/register"));
const error_404_1 = __importDefault(require("../routes/error-404"));
class Server {
    constructor() {
        this.apiPaths = {
            login: '/auth',
            chat: '/chat',
            forgotPass: '/forgot-pass',
            register: '/register',
            error404: '*'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.server = http_1.default.createServer(this.app);
        this.io = require('socket.io')(this.server);
        this.connectDBMongo();
        this.middlewares();
        this.routes();
        this.sockets();
        this.listen();
    }
    ;
    connectDBMongo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnectMongo)();
        });
    }
    ;
    middlewares() {
        return __awaiter(this, void 0, void 0, function* () {
            // this.app.use((req, res, next) => {
            //     res.header('Access-Control-Allow-Origin', '*');
            //     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            //     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            //     next();
            // });
            yield this.app.use((0, cors_1.default)({
                credentials: true,
                origin: '*'
            }));
            this.app.use(express_1.default.json());
        });
    }
    ;
    routes() {
        this.app.use(this.apiPaths.login, auth_1.default);
        this.app.use(this.apiPaths.chat, chat_1.default);
        this.app.use(this.apiPaths.register, register_1.default);
        this.app.use(this.apiPaths.error404, error_404_1.default);
    }
    ;
    sockets() {
        this.io.on("connection", (socket) => {
            console.log('Cliente conectado', socket.id);
            socket.on('disconnect', () => {
                console.log('cliente desconectado', socket.id);
            });
        });
    }
    ;
    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map