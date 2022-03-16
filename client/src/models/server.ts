import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';

import routerLogin from '../routes/login';
import routerForgotPass from '../routes/forgot-pass';
import routerRegiter from '../routes/register';

class Server {
    private app: Application;
    private port: string;
    private path: any = {
        login: '/login',
        forgotPass: '/forgot-pass',
        register: '/register'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.path;
        this.middlewares();
        this.routes();
        this.listen();
    };

    middlewares() {
        this.app.use(cors());
        this.app.use(express.static(path.resolve(__dirname, '../../../public')));
    }

    routes() {
        this.app.use(this.path.login, routerLogin);
        this.app.use(this.path.forgotPass, routerForgotPass);
        this.app.use(this.path.register, routerRegiter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenning on port ${this.port}`);
        })
    }
}

export default Server;