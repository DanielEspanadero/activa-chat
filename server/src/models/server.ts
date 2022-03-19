import express, { Application } from 'express';
import cors from 'cors';

import { dbConnectMongo } from '../db/config';
import routerLogin from '../routes/login';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        login: '/login'
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
        this.app.use(cors({
            credentials: true,
            origin: 'http://localhost:3000'
        }));
    };

    routes() {
        this.app.use(this.apiPaths.login, routerLogin);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`)
        });
    };
};

export default Server;