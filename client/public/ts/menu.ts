(() => {
    window.addEventListener('load', () => {
        const rooms: HTMLDivElement = document.querySelector('#button-rooms')!;
        const roomsContainer: HTMLDivElement = document.querySelector('.hidden-rooms')!;
        const users: HTMLDivElement = document.querySelector('#button-users')!;
        const usersContainer: HTMLDivElement = document.querySelector('.hidden-users')!;
        const chatContainer: HTMLElement = document.querySelector('.hidden-chat')!;
        const closeRooms: HTMLDivElement = document.querySelector('.close-rooms')!;
        const closeUsers: HTMLDivElement = document.querySelector('.close-users')!;

        rooms.addEventListener('click', () => {
            if (window.innerWidth < 1000) {
                roomsContainer.classList.toggle('hidden-rooms');
                chatContainer.classList.toggle('hidden-chat');
            };
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
            };
        });

        closeUsers.addEventListener('click', () => {
            if (window.innerWidth < 1000) {
                usersContainer.classList.toggle('hidden-users');
                chatContainer.classList.toggle('hidden-chat');
            };
        }); 

    });
})()