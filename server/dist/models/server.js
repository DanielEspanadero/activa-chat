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
const config_1 = require("../db/config");
// Routes path
const login_1 = __importDefault(require("../routes/login"));
const chat_1 = __importDefault(require("../routes/chat"));
const register_1 = __importDefault(require("../routes/register"));
class Server {
    constructor() {
        this.apiPaths = {
            login: '/login',
            chat: '/chat',
            forgotPass: '/forgot-pass',
            register: '/register'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '5000';
        this.connectDBMongo();
        this.middlewares();
        this.routes();
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
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
        // this.app.use(cors({
        //     credentials: true,
        //     origin: 'http://localhost:3000'
        // }));
        this.app.use(express_1.default.json());
    }
    ;
    routes() {
        this.app.use(this.apiPaths.login, login_1.default);
        this.app.use(this.apiPaths.chat, chat_1.default);
        this.app.use(this.apiPaths.register, register_1.default);
    }
    ;
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map