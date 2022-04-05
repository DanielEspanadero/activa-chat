"use strict";
(() => {
    window.addEventListener('load', () => {
        const rooms = document.querySelector('#button-rooms');
        const roomsContainer = document.querySelector('.hidden-rooms');
        const users = document.querySelector('#button-users');
        const usersContainer = document.querySelector('.hidden-users');
        const chatContainer = document.querySelector('.hidden-chat');
        const closeRooms = document.querySelector('.close-rooms');
        const closeUsers = document.querySelector('.close-users');
        rooms.addEventListener('click', () => {
            if (window.innerWidth < 1000) {
                roomsContainer.classList.toggle('hidden-rooms');
                chatContainer.classList.toggle('hidden-chat');
            }
            ;
        });
        closeRooms.addEventListener('click', () => {
            if (window.innerWidth < 1000) {
                roomsContainer.classList.toggle('hidden-rooms');
                chatContainer.classList.toggle('hidden-chat');
            }
        });
        users.addEventListener('click', () => {
            if (window.innerWidth < 1000) {
                usersContainer.classList.toggle('hidden-users');
                chatContainer.classList.toggle('hidden-chat');
            }
            ;
        });
        closeUsers.addEventListener('click', () => {
            if (window.innerWidth < 1000) {
                usersContainer.classList.toggle('hidden-users');
                chatContainer.classList.toggle('hidden-chat');
            }
            ;
        });
    });
})();
//# sourceMappingURL=menu.js.map