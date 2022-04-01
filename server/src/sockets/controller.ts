export const socketController = (socket: any) => {

    // console.log(socket.handshake.headers['x-token']);

    setInterval(() => socket.emit("hello", "server li diu hello al client"), 5000);

    socket.on("howareyou", (arg: any) => {
        console.log(arg);
    });

}