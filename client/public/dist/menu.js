"use strict";
(() => {
    window.addEventListener('load', () => {
        const rooms = document.querySelector('#button-rooms');
        const roomsContainer = document.querySelector('.hidden-rooms');
        const users = document.querySelector('#button-users');
        const usersContainer = document.querySelector('.hidden-users');
        const chatContainer = document.querySelector('.hidden-chat');
        rooms.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                roomsContainer.classList.toggle('hidden-rooms');
                chatContainer.classList.toggle('hidden-chat');
            }
            ;
        });
        users.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                usersContainer.classList.toggle('hidden-users');
                chatContainer.classList.toggle('hidden-chat');
            }
            ;
        });
    });
})();
//# sourceMappingURL=menu.js.map