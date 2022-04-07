const mainChat = document.querySelector('#mainChat');
const closeButton = document.querySelector('.close');

const sendMessage = document.querySelector('#send-message');
const inputChat = document.querySelector('#input-chat').value;

const url = 'http://localhost:5000';

// const socket = io("http://localhost:5000");

let user = null;
const socket = io(url);

// Validate localstorage token
const validateJWT = async () => {
    const token = localStorage.getItem('token') || '';

    if (!token.length) {
        window.location.href = '/login';
        throw new Error('Error, no hay token en el servidor!');
    };

    const resp = await fetch(url, {
        headers: { 'x-token': token },
        mode: 'no-cors'
    })

    const { user: userDB, token: tokenDB } = await resp.json()
    localStorage.setItem('token', tokenDB),
        user = userDB,
        document.title = user.name

    await connectSocket();
};

const conectSocket = async () => {

    // socket = io({
    //     'extraHeaders': {
    //         'x-token': localStorage.getItem('token')
    //     }
    // });

    socket.on('connect', () => {
        console.log('Sockets online')
    });

    socket.on('disconnect', () => {
        console.log('Sockets offline')
    });

    socket.on('recibir-mensajes', dibujarMensajes);
    socket.on('usuarios-activos', dibujarUsuarios);

    socket.on('mensaje-privado', (payload) => {
        console.log('Privado:', payload)
    });
};

// Close button
closeButton.addEventListener('click', () => {

    localStorage.removeItem('token');
    location.reload();

    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        window.location = '/login';
    });

});

sendMessage.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const dibujarMensajes = (mensajes = []) => {

        let mensajesHTML = '';
        mensajes.forEach(({ nombre, mensaje = inputChat }) => {

            mensajesHTML += `
                <div class="message">
                    <img class="avatar" src="../../assets/img/avatars/01.png" alt="avatar">
                    <div>
                        <p class="name">Daniel Españadero</p>
                        <p class="text-message">${inputChat}</p>
                        <p class="data">Lunes 21 a las 23:00h</p>
                    </div>
                </div>
        `;

            mainChat.innerHTML = mensajesHTML
        });
    }

    dibujarMensajes()
});



const main = async () => {

    // Validate JWT
    await validateJWT();
    await connectSocket();
}

main();


// (() => {
//     gapi.load('auth2', () => {
//         gapi.auth2.init();
//         main();
//     });
// })();

    //   socket.on('recibir-mensajes', dibujarMensajes);