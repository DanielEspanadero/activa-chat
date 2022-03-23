"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const login_1 = __importDefault(require("../routes/login"));
const forgot_pass_1 = __importDefault(require("../routes/forgot-pass"));
const register_1 = __importDefault(require("../routes/register"));
const chat_1 = __importDefault(require("../routes/chat"));
const _404_1 = __importDefault(require("../routes/404"));
class Server {
    constructor() {
        this.path = {
            login: '/login',
            forgotPass: '/forgot-pass',
            register: '/register',
            chat: '/chat',
            error404: '*'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.path;
        this.middlewares();
        this.routes();
        this.listen();
    }
    ;
    middlewares() {
        // this.app.use((req, res, next) => {
        //     res.header('Access-Control-Allow-Origin', '*');
        //     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        //     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        //     next();
        // });
        this.app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../../public')));
        this.app.use((0, cors_1.default)({
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false,
        }));
    }
    routes() {
        this.app.use(this.path.login, login_1.default);
        this.app.use(this.path.forgotPass, forgot_pass_1.default);
        this.app.use(this.path.register, register_1.default);
        this.app.use(this.path.chat, chat_1.default);
        this.app.use(this.path.error404, _404_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenning on port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map