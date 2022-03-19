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
        this.apiPaths = {
            login: '/login'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '5000';
        this.middlewares();
        this.routes();
        this.listen();
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
        this.app.use(this.apiPaths.login, login_1.default);
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