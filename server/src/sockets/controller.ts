import ChatMessages from '../models/chat-messages';
import { User } from '../models/user';
import { checkJWT } from '../helpers/generate-jwt';
import { formatMessage } from '../helpers/messages';

const chatMessages = new ChatMessages();

export const socketController = async (socket: any, io: any) => {

    // console.log(socket.handshake.headers['x-token']);

    // setInterval(() => socket.emit("hello", "server li diu hello al client"), 5000);

    const user = await checkJWT(socket.handshake.headers['x-token']);

}