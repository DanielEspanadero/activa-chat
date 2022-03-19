"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const login_1 = __importDefault(require("../routes/login"));
class Server {
    constructor() {
        this.path = {
            login: '/login'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
        this.server();
    }
    ;
    middlewares() {
        this.app.use((0, cors_1.default)({
            credentials: true,
            origin: 'http://localhost:3000'
        }));
    }
    ;
    routes() {
        this.app.use(this.path.login, login_1.default);
    }
    ;
    server() {
        this.app.use(this.port, () => {
            console.log(`Listenner on port ${process.env.PORT}`);
        });
    }
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map