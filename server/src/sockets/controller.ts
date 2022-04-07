import ChatMessages from '../models/chat-messages';
import { User } from '../models/user';
import { checkJWT } from '../helpers/generate-jwt';

const chatMessages = new ChatMessages();

export const socketController = async (socket: any, io: any) => {

    // console.log(socket.handshake.headers['x-token']);

    // setInterval(() => socket.emit("hello", "server li diu hello al client"), 5000);

    const user = await checkJWT(socket.handshake.headers['x-token']);

    //! Agregar el usuario conectado
    chatMessages.connectUser(user);
    io.emit('usuarios-activos', chatMessages.usersArr)

    //! Limpiar cuando alguien se desconecta
    socket.on('disconnect', () => {
        // chatMessages.disconnectUser(User.id);
        io.emit('usuarios-activos', chatMessages.usersArr);
    })

    socket.on("howareyou", (arg: any) => {
        console.log(arg);
    });

    socket.on("connect", () => {
        console.log('Socket online');
    });

    socket.on("disconnect", () => {
        console.log('Socket offline');
        // chatMessages.disconnectUser(user.id);
    });

    socket.emit('recibir-mensajes', chatMessages.last10);
}