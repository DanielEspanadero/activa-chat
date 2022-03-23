import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';

import routerLogin from '../routes/login';
import routerForgotPass from '../routes/forgot-pass';
import routerRegiter from '../routes/register';
import routerChat from '../routes/chat';
import router404 from '../routes/404';

class Server {
    private app: Application;
    private port: string;
    private path: any = {
        login: '/login',
        forgotPass: '/forgot-pass',
        register: '/register',
        chat: '/chat',
        error404: '*'
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
        // this.app.use((req, res, next) => {
        //     res.header('Access-Control-Allow-Origin', '*');
        //     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        //     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        //     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        //     next();
        // });
        this.app.use(express.static(path.resolve(__dirname, '../../../public')));
        this.app.use(cors({
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
        this.app.use(this.path.login, routerLogin);
        this.app.use(this.path.forgotPass, routerForgotPass);
        this.app.use(this.path.register, routerRegiter);
        this.app.use(this.path.chat, routerChat);
        this.app.use(this.path.error404, router404);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenning on port ${this.port}`);
        })
    }
}

export default Server;