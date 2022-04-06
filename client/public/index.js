const mainChat = document.querySelector('#mainChat');
const sendMessage = document.querySelector('#send-message');

const socket = io("http://localhost:5000");

socket.on("hello", (arg) => {
    console.log(arg);
});

socket.on("connect", () => {
    console.log('Socket online');
});

socket.on("disconnect", () => {
    console.log('socket offline');
});

socket.on('recibir-mensajes', () => {
    // TODO 
});

socket.on('usuarios-activos', (payload) => {
    console.log(payload);
});

socket.on('mensaje-privado', () => {
    // TODO 
});

// setInterval(() => {
//     socket.emit("howareyou", "client li diu how are you al server");
// }, 5000);
sendMessage.addEventListener('click', (ev) => {
    ev.preventDefault()
const dibujarMensajes = (mensajes = []) => {
    let mensajesHTML = '';

        mensajesHTML += `
<div class="message">
                    <img class="avatar" src="../../assets/img/man.png" alt="avatar">
                    <div>
                        <p class="name">${nombre}</p>
                        <p class="text-message">${mensaje}</p>
                        <p class="data">Lunes 21 a las 23:00h</p>
                    </div>
                </div>
        `;
    mainChat.innerHTML = mensajesHTML;
}
});

            //   socket.on('recibir-mensajes', dibujarMensajes);
