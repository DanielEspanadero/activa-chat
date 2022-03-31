export const socketController = (socket: any) => {

    console.log(socket.handshake.headers['x-token']);

}