import express, { Application } from 'express';
import cors from 'cors';

import routerLogin from '../routes/login';

class Server {
    private app: Application;
    private port: any;
    private path = {
        login: '/login'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
        this.server();
    };

    middlewares(){
        this.app.use(cors({
            credentials: true,
            origin: 'http://localhost:3000'
        }));
    };

    routes(){
        this.app.use(this.path.login, routerLogin);
    };
    
    server() {
        this.app.use(this.port, ()=>{
            console.log(`Listenner on port ${process.env.PORT}`)
        })
    }
};

export default Server;