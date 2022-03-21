import express, { Application } from 'express';
import cors from 'cors';
import http from 'http';


import { dbConnectMongo } from '../db/config';
// Routes path
import routerAuth from '../routes/auth';
import routerChat from '../routes/chat';
import routerRegister from '../routes/register';
import router404 from '../routes/register';

class Server {
    private app: Application;
    private port: string;
    private server: any;
    private io: any;
    private apiPaths = {
        login: '/login',
        chat: '/chat',
        forgotPass: '/forgot-pass',
        register: '/register',
        error404: '*'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '5000';
        this.server = http.createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.connectDBMongo();
        this.middlewares();
        this.routes();
        this.sockets();
        this.listen();
    };

    async connectDBMongo(){
        await dbConnectMongo();
    };

    middlewares() {
        this.app.use(cors({
            credentials: true,
            origin: 'http://localhost:3000'
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
        this.io.on("connection", (socket: any) => {
            console.log('Cliente conectado', socket.id);
            socket.on('disconnect', () => {
                console.log('cliente desconectado', socket.id);
            });
        });
    };

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`)
        });
    };
};

export default Server;