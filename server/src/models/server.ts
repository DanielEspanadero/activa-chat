import express, { Application } from 'express';
import cors from 'cors';
import http from 'http';


import { dbConnectMongo } from '../db/config';

// Routes path
import routerAuth from '../routes/auth';
import routerChat from '../routes/chat';
import routerRegister from '../routes/register';
import router404 from '../routes/error-404';

import { socketController } from '../sockets/controller';

class Server {
    private app: Application;
    private port: string;
    private server: any;
    private io: any;
    private apiPaths = {
        login: '/auth',
        chat: '/chat',
        forgotPass: '/forgot-pass',
        register: '/register',
        error404: '*'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT as string;
        this.server = http.createServer(this.app);
        this.io = require('socket.io')(this.server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        this.connectDBMongo();
        this.middlewares();
        this.routes();
        this.sockets();
        this.listen();
    };

    async connectDBMongo() {
        await dbConnectMongo();
    };

    middlewares() {
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
        this.app.use(express.json());
    };

    routes() {
        this.app.use(this.apiPaths.login, routerAuth);
        this.app.use(this.apiPaths.chat, routerChat);
        this.app.use(this.apiPaths.register, routerRegister);
        this.app.use(this.apiPaths.error404, router404);
    };

    sockets() {
        this.io.on("connection", socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`)
        });
    };
};

export default Server;