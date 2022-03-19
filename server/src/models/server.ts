import express, { Application } from 'express';
import cors from 'cors';

import { dbConnectMongo } from '../db/config';
// Routes path
import routerLogin from '../routes/login';
import routerChat from '../routes/chat';
import routerRegister from '../routes/register'

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        login: '/login',
        chat: '/chat',
        forgotPass: '/forgot-pass',
        register: '/register'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '5000';

        this.connectDBMongo();
        this.middlewares();
        this.routes();
        this.listen();
    };

    async connectDBMongo(){
        await dbConnectMongo();
    };

    middlewares() {

        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-COntrol-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        }) 
        // this.app.use(cors({
        //     credentials: true,
        //     origin: 'http://localhost:3000'
        // }));
        this.app.use(express.json());
    };

    routes() {
        this.app.use(this.apiPaths.login, routerLogin);
        this.app.use(this.apiPaths.chat, routerChat);
        this.app.use(this.apiPaths.register, routerRegister);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`)
        });
    };
};

export default Server;