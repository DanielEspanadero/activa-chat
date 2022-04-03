import { io, Socket } from "socket.io-client";

const url: string = 'http://localhost:5000'

let user = null;
let socket = null;

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}
interface ClientToServerEvents {
    hello: () => void;
}

// Validate localstorage token
const validateJWT = async () => {
    const token = localStorage.getItem('token') || '';

    if (token.length) {
        window.location.href = '/login';
        throw new Error('Error, no hay token en el servidor!');
    };

    const resp = await fetch(url, {
        headers: { 'x-token': token }
    })

    const { user: userDB, token: tokenDB } = await resp.json()
    localStorage.setItem('token', tokenDB),
        user = userDB,
        document.title = user.name

        await connectSocket();
};

const connectSocket = async () => {
    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:5000',{
        'extraHeaders': {
            'x-token': localStorage.getItem('token')!
        }
    });

    socket.on("connect", () => {
        console.log('Socket online');
    });

    socket.on("disconnect", () => {
        console.log('socket offline');
    });
}

const main = async () => {

    // Validate JWT
    await validateJWT();

    await connectSocket();
}

main();