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

// sendMessage.addEventListener('submit', (ev) => {
//     ev.preventDefault();

//     function renderMessage(data) {
//         let html = data
//             .map(function (elem) {
//                 return `<div>
//               <em>${elem.text}</em>
//             </div>`;
//             })
//             .join(' ');

//         document.getElementById('messages').innerHTML = html;
//     };

// });



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

// seleccionar element de HTML
var boto2 = document.querySelector(`#button2`)
var input = document.querySelector("#text")
var coses = document.querySelector("#coses")


boto2.addEventListener("click", () => {
    coses.innerHTML += `
    <div class="message">
        <img class="avatar" src="../../assets/img/avatars/01.png" alt="avatar">
        <div>
            <p class="name">Daniel Espa??adero</p>
            <p class="text-message">${input.value}</p>
            <p class="data">${new Date().toDateString() }</p>
        </div>
    </div>` // afegeix a dins l'etiqueta
})